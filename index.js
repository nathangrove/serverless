var express = require('express');
const app = express();
var bodyParser = require('body-parser')
var crypto = require('crypto');
let algorithm = 'aes256';
var UglifyJS = require("uglify-js");
var auth = require('basic-auth');


var Datastore = require('nedb');
let users = new Datastore({ filename: 'users.db', autoload: true });
let keys = new Datastore({ filename: 'keys.db', autoload: true });
users.persistence.setAutocompactionInterval(1800000);
keys.persistence.setAutocompactionInterval(60000);
users.ensureIndex({ fieldName : 'username', unique: true }, err => { if(err) console.log(err); });


// an authentication function
app.authenticate = function(request,callback){

  var authHeader = request.headers['authorization'].trim().split(/\s+/);

  // was it a bearer (jwt) token?
  if (authHeader[0] == 'Bearer'){
    let auth = authHeader[1].split('.').map( str => new Buffer(str,'base64').toString() );

    // get the parts of the jwt
    let header = auth[0];
    let payload = JSON.parse(auth[1]);
    let signature = auth[2];

    console.log(signature);
    // find the user by username in the payload
    users.findOne({ username: payload.user }, (error, user) => { 
      if (!user || !user.active) return callback("Invalid user");
      if (signature != encodeURI(crypto.createHmac('SHA256',user._id + "saltedWithSuperSaltySalt").update(`${header}.${JSON.stringify(payload)}`).digest('hex')))
        return callback('Invalid signature');

      // convert key into buffer
      key = Buffer.from(user._id,'utf8');
      var decipher = crypto.createDecipher(algorithm, key);
      var profile = JSON.parse(decipher.update(payload.data, 'hex', 'utf8') + decipher.final('utf8'));

      // if the payload was modified...then its wrong...
      if (profile.user != user._id) return callback('Invalid user');

      // if we made it here..then it checks out...
      callback(null,user);

    });
  
  // perhaps basic auth? 
  } else if (authHeader[0] == 'Basic'){
    let auth = new Buffer(authHeader[1], 'base64').toString().split(/:/);
    let password = crypto.createHash('md5').update(auth[1]).digest('hex') 
    users.findOne({ username: auth[0], password: password }, (err, user) => callback(null,user) );
  }

}

// serve up the public directory
app.use(express.static('public'));


// parse out json bodies
app.use(bodyParser.json());


// return a JWT
app.post('/login', function(req,res){
  let password = crypto.createHash('md5').update(req.body.password).digest('hex');
  users.findOne({ username: req.body.username, password: password }, (error, user) => {
    if (!user){
      res.status(403);
      return res.send("<h1>403</h1><h2>Unauthorized</h2>");
    }

    // build the jwt
    let header = JSON.stringify({ "alg": "HS256", "typ": "JWT" });

    // jwt payload
    var cipher = crypto.createCipher(algorithm, user._id);
    let encryptedPayload = cipher.update(JSON.stringify({
      issue: new Date().getTime(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      user: user._id
    }), 'utf8', 'hex') + cipher.final('hex');
    let payload = JSON.stringify({ "user": user.username, "data": encryptedPayload });

    // jwt signature
    let signature = crypto.createHmac('SHA256',user._id + "saltedWithSuperSaltySalt").update(`${header}.${payload}`).digest('hex');
    console.log(signature);

    // prepare for http transportation
    header = encodeURI(new Buffer(header).toString('base64'));
    payload = encodeURI(new Buffer(payload).toString('base64'));
    signature = encodeURI(new Buffer(signature).toString('base64'));

    // return the bearer token 
    res.send({ token: `${header}.${payload}.${signature}`});

  });

})


// encrpyt code
app.post('/encrypt', function(req,res){

  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    // wrap the code in commonjs module and then uglify it.
    let code = UglifyJS.minify('module.exports = function(request,response){' + req.body.code + '};').code;

    // generate a crypto key
    let salt = Math.random() + 'saltingTheSaltWithSaltySalt';
    let key = crypto.createHash('md5').update(code + salt).digest('hex');

    // init the cipher
    var cipher = crypto.createCipher(algorithm, key);

    // encrypt the code
    let encrypted = cipher.update(code, 'utf8', 'hex') + cipher.final('hex');

    // store the encryption key with the id being the md5 of the encrypted code
    keys.insert({
      _id: crypto.createHash('md5').update(encrypted).digest('hex'),
      user: user._id,
      runs: 0,
      last: 0,
      created: new Date().getTime(),
      key: key
    });

    // send the encrypted code
    res.send(encrypted);

  });

})





app.post('/run', function (req, res) {

  // create a new VM
  const {NodeVM} = require('vm2');
  const vm = new NodeVM({
    console: 'redirect',
    sandbox: {},
    require: {
      external: true,
      root: './vm/node_modules'
    }
  });
    
  // get the encrypted code
  let encryptedCode = req.body.code;

  // get the decryption key
  keys.findOne({ _id: crypto.createHash('md5').update(encryptedCode).digest('hex')}, (err,key) => {
    if (!key){
      res.status(500);
      return res.send('Invalid code');
    } else {

      // update the database
      keys.update({ _id: key._id},{ $set: {runs: key.runs+1, last: new Date().getTime() }});

      // convert key into buffer
      key = Buffer.from(key.key,'utf8');

      // create the decipher
      var decipher = crypto.createDecipher(algorithm, key);

      // decrypt
      var executionCode = decipher.update(encryptedCode, 'hex', 'utf8') + decipher.final('utf8');

      // prepare the vm
      let runFunc = vm.run(executionCode,'vm.js');

      // run the code
      runFunc(req, res);
    }
  });

});




app.listen(3000, function () {
  console.log('Serverless is up and running on port 3000!')

})


