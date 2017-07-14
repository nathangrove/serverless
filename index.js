var express = require('express');
const app = express();
var bodyParser = require('body-parser')
var crypto = require('crypto');
let algorithm = 'aes256';
var UglifyJS = require("uglify-js");
var auth = require('basic-auth');

/************************ DATABASE SETUP *****************************/
var Datastore = require('nedb');
let db = {
  users: new Datastore({ filename: 'users.db', autoload: true }),
  keys: new Datastore({ filename: 'keys.db', autoload: true }),
  packages: new Datastore({ filename: 'packages.db', autoload: true })
}
db.users.persistence.setAutocompactionInterval(1800000);
db.packages.persistence.setAutocompactionInterval(1800000);
db.keys.persistence.setAutocompactionInterval(60000);
db.users.ensureIndex({ fieldName : 'username', unique: true }, err => { if(err) console.log(err); });



/*********************** EXPRESS CONFIGURATION *************************/

// serve up the public directory
app.use(express.static('public'));

// parse out json bodies
app.use(bodyParser.json());

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*********************** AUTHENTICATION *******************************/
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
    db.users.findOne({ username: payload.user }, (error, user) => { 
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
    db.users.findOne({ username: auth[0], password: password }, (err, user) => callback(null,user) );
  }

}



/*********************** LOGIN ********************************/
// Login the user and hand back a JWT
app.post('/login', function(req,res){
  console.log("Attempting login:",req.body);
  let password = crypto.createHash('md5').update(req.body.password).digest('hex');
  db.users.findOne({ username: req.body.username, password: password }, (error, user) => {
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
      user: user._id,
    }), 'utf8', 'hex') + cipher.final('hex');
    let payload = JSON.stringify({ "user": user.username, "admin": user.admin, "data": encryptedPayload });

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



/*********************** ENCRYPT ***************************/
// Encrypt code that should be ran later
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
    db.keys.insert({
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



/************************* RUN CODE **************************/
// Run encrypted code
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
  db.keys.findOne({ _id: crypto.createHash('md5').update(encryptedCode).digest('hex')}, (err,key) => {
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

app.get("/:table", function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user || !user.admin) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    let table = req.params.table;
    if (!db[table]){
      res.status(404);
      return res.send('Object not found');
    }

    db[table].find({}, function (err, docs) {
      if (err){
        res.status(500);
        res.send(err);

      } else if (!obj.length){
        res.status(404);
        res.send('Object not found');

      } else {
        res.send(docs);
      }
    });

  });
}).post("/:table", function(req,res){
  app.authenticate(req, (error,user) => {

    if (!user || !user.admin) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    let newUser = {};
    newUser.username = req.body.username;
    newUser.password = crypto.createHash('md5').update(req.body.password).digest('hex')
    newUser.time = new Date().getTime();
    newUser.admin = req.body.admin;

    let table = req.params.table;
    if (!db[table]){
      res.status(404);
      return res.send('Object not found');
    }

    db[table].insert(newUser, (error,obj) => {
      if (error) {
        res.status(500);
        res.send(error);
      } else {
        res.send(obj);
      }
    });
  }) 
}).delete("/:table/:id", function(req,res){
  app.authenticate(req, (error,user) => {

    if (!user || !user.admin) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    let table = req.params.table;
    if (!db[table]){
      res.status(404);
      return res.send('Object not found');
    }

    db[table].remove({ _id: req.param.id }, (error,num) => {
      if (error){
        res.status(500);
        return res.send(error);
      } else if (!num){
        res.status(404);
        res.send("Object not found");
      } else {
        res.send();
      }
    })
  })
})



// Fireup the server
app.listen(3000, () => console.log('Serverless is up and running on port 3000!') )


