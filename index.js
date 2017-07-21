var express = require('express');
const app = express();
var bodyParser = require('body-parser')
var crypto = require('crypto');
let algorithm = 'aes256';
var UglifyJS = require("uglify-js");
var auth = require('basic-auth');
var packageJson = require('./package.json');
var npm = require('npm-programmatic');
var pem = require('pem');
var fs = require('fs');
var http = require('http');
var https = require('https');
var config, db;
var packageManger = new PackageManger();

let cryptoSalt = 'saltingTheSaltWithSuperSaltySalt';
let signatureSalt = 'saltedWithSuperSaltyMrSaltington';


/**
 * Get a configuration object
 * @param  {Function} callback - callback with the error,configuration
 */
function getConfiguration(callback){
  let conf = {};

  try { conf = JSON.parse(fs.readFileSync(__dirname + '/configuration.json', 'utf8')); } catch (e){ console.log('Could not read configuration.json. Using default configuration.'); };

  if (!conf.port) conf.port = 3000;
  if (!conf.database) conf.database = { type: "local", location: "database" };
  if (!typeof conf.ssl) conf.ssl = true;
  
  // if we are using ssl...init the https package
  if (conf.ssl){
      if (conf.sslCert) conf._sslCert = fs.readFileSync(conf.sslCert, 'utf8');
      if (conf.sslKey) conf._sslKey = fs.readFileSync(conf.sslKey, 'utf8');
      if (!conf.sslCert || !conf.sslKey){

        pem.createCertificate({days: 365, selfSigned:true}, function(err, keys){
          if (err) return callback("Reading SSL key/cert failed and generation failed.",config);

          console.log("Reading of SSL Cert and Key failed. Using self signed valid for 365 days.");
          conf._sslKey = keys.serviceKey;
          conf._sslCert = keys.certificate;
          callback(null,conf);
        });
      } else {
        callback(null,conf);
      }
  } else {
    callback(null,conf);
  }
}


/************************ DATABASE SETUP *****************************/
function setupDatabase( callback ){

  var Datastore = require('nedb');
  db = {
    users: new Datastore({ filename: `${config.database.location}/users.db`, autoload: true }),
    keys: new Datastore({ filename: `${config.database.location}/keys.db`, autoload: true }),
    packages: new Datastore({ filename: `${config.database.location}/packages.db`, autoload: true })
  }
  db.users.persistence.setAutocompactionInterval(1800000);
  db.users.ensureIndex({ fieldName : 'username', unique: true }, err => { if(err) console.log(err); });
  db.packages.persistence.setAutocompactionInterval(1800000);
  db.packages.ensureIndex({ fieldName : 'name', unique: true }, err => { if(err) console.log(err); });
  db.keys.persistence.setAutocompactionInterval(60000);

  callback();
}

/*********************** EXPRESS CONFIGURATION *************************/

// serve up the public directory
app.use(express.static('public'));


// parse out json bodies
app.use(bodyParser.json());


// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});



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
      buildin: packageManger.packages
    }
  });
    
  // get the encrypted code
  let encryptedCode = req.body.code;

  // get the decryption key
  db.keys.findOne({ _id: crypto.createHash('md5').update(encryptedCode).digest('hex'), active: true }, (err,key) => {
    if (!key){
      res.status(500);
      return res.send('Invalid code');
    } else {

      // update the database
      db.keys.update({ _id: key._id},{ $set: {runs: key.runs+1, last: new Date().getTime() }});

      // convert key into buffer
      key = Buffer.from(key.key,'utf8');

      // create the decipher
      var decipher = crypto.createDecipher(algorithm, key);

      // decrypt
      var executionCode = decipher.update(encryptedCode, 'hex', 'utf8') + decipher.final('utf8');

      // prepare the vm
      let runFunc = vm.run(executionCode,'vm.js');

      // run the code
      try {
        runFunc(req, res);
      } catch (e){
        // update the database
        db.keys.update({ _id: key._id},{ $set: {crashes: key.crashes+1, last: new Date().getTime() }});

        res.status(500);
        res.send(e);
      }
  
    }
  });
})



/*********************** AUTHENTICATION *******************************/
// an authentication function
app.authenticate = function(request,callback){
  if (!request.headers['authorization']) return callback('Authorization is required');

  var authHeader = request.headers['authorization'].trim().split(/\s+/);

  // was it a bearer (jwt) token?
  if (authHeader[0] == 'Bearer'){
    let auth = authHeader[1].split('.').map( str => new Buffer(str,'base64').toString() );

    // get the parts of the jwt
    let header = auth[0];
    let payload = JSON.parse(auth[1]);
    let signature = auth[2];

    // find the user by username in the payload
    db.users.findOne({ username: payload.user }, (error, user) => { 

      if (error) return callback(error);
      if (!user || !user.active) return callback("Invalid user");
      if (signature != encodeURI(crypto.createHmac('SHA256',user._id + signatureSalt).update(`${header}.${JSON.stringify(payload)}`).digest('hex')))
        return callback('Invalid signature');

      // convert key into buffer
      key = Buffer.from(user._id,'utf8');
      var decipher = crypto.createDecipher(algorithm, key);
      var profile = JSON.parse(decipher.update(payload.data, 'hex', 'utf8') + decipher.final('utf8'));

      // if the payload was modified...then its wrong...
      if (profile.user != user._id) return callback('Invalid user');
      if (!user) return callback('Invalid user');

      // if we made it here..then it checks out...
      callback(null,user);

    });
  
  // perhaps basic auth? 
  } else if (authHeader[0] == 'Basic'){
    let auth = new Buffer(authHeader[1], 'base64').toString().split(/:/);
    let password = crypto.createHash('md5').update(auth[1]).digest('hex') 
    db.users.findOne({ username: auth[0], password: password }, (err, user) => { if (err) callback(err); else callback(null,user); });
  } else {
    callback('Authorization header required');
  }

}



/*********************** LOGIN ********************************/
// Login the user and hand back a JWT
app.post('/login', function(req,res){
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
    let signature = crypto.createHmac('SHA256',user._id + signatureSalt).update(`${header}.${payload}`).digest('hex');

    // prepare for http transportation
    header = encodeURI(new Buffer(header).toString('base64'));
    payload = encodeURI(new Buffer(payload).toString('base64'));
    signature = encodeURI(new Buffer(signature).toString('base64'));

    // return the bearer token 
    res.send({ token: `${header}.${payload}.${signature}`});

  });

})



/************* USER CALLS **********************/
app.get('/mycalls', function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (error || !user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error || 'Authentication is required'}</h2>`);
    }

    db.keys.find({ user: user._id }, (err,docs) => {
      if (err) {
        res.status(500);
        res.send(err);
      }

      // strip out the decryption keys
      res.send(docs.map( doc => {
        delete doc.key;
        delete doc.user;
        return doc;
      }));

    })
  });
}).post('/mycalls', function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    // did the user name this?
    let name = req.body.name;

    try {

      // get the code
      let code = req.body.code;

      // see if the code contains a response.send call 
      if (!/response\.send\(/g.test(code)) {
        res.status(400);
        return res.send("Your code must contain 'response.send()'");
      }

      // wrap the code in commonjs module and then uglify it.
      if (!code.indexOf('module.exports') < 0) code = 'module.exports = function(request,response){' + code + '};';
      code = UglifyJS.minify(code).code;

      // generate a crypto key
      let key = crypto.createHash('md5').update(code + cryptoSalt).digest('hex');

      // init the cipher
      var cipher = crypto.createCipher(algorithm, key);

      // encrypt the code
      let encrypted = cipher.update(code, 'utf8', 'hex') + cipher.final('hex');

      // store the encryption key with the id being the md5 of the encrypted code
      let id = crypto.createHash('md5').update(encrypted).digest('hex');
      db.keys.insert({
        _id: id,
        user: user._id,
        name: name,
        runs: 0,
        last: 0,
        created: new Date().getTime(),
        key: key
      });

      // send the encrypted code
      res.send({
        _id: id,
        code: encrypted
      });

    } catch (e) {
      res.status(500);
      return res.send(e.toString());
    }

  });
}).put('/mycalls/:id', function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }

    try {

      // get the code
      let code = req.body.code;
      let id = req.params.id;

      // see if the code contains a response.send call 
      if (!/response\.send\(/g.test(code)) {
        res.status(400);
        return res.send("Your code must contain 'response.send()'");
      }

      // wrap the code in commonjs module and then uglify it.
      if (!code.indexOf('module.exports') < 0) code = 'module.exports = function(request,response){' + code + '};';
      code = UglifyJS.minify(code).code;

      // generate a crypto key
      let key = crypto.createHash('md5').update(code + cryptoSalt).digest('hex');

      // init the cipher
      var cipher = crypto.createCipher(algorithm, key);

      // encrypt the code
      let encrypted = cipher.update(code, 'utf8', 'hex') + cipher.final('hex');

      key = crypto.createHash('md5').update(encrypted).digest('hex');
      db.keys.update({ _id: id, user: user._id }, { $set: {
        _id: key,
        updated: new Date().getTime()
      }}, { multi: false }, (err,num) => {
        if (err){
          res.status(500);
          res.send(err);
        } else {
          res.send({
            _id: key,
            code: encrypted
          });
        }
      });

      
    } catch (e) {
      res.status(500);
      return res.send(e.toString());
    }

  });
}).delete('/mycalls/all', function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }


    db.keys.remove({ user: user._id }, { multi: true }, function (err, numRemoved) {
      if (err){
        res.status(500);
        res.send(err);
      } else {
        res.send(`${numRemoved} calls removed`);
      }
    });
  });
}).delete('/mycalls/:id', function(req,res){
  // authenticate the user
  app.authenticate(req, (error,user) => {

    if (!user) {
      res.status(403);
      return res.send(`<h1>403</h1><h2>Unauthorized: ${error}</h2>`);
    }


    db.keys.remove({ _id: req.params.id, user: user._id }, { }, function (err, numRemoved) {
      if (err){
        res.status(500);
        res.send(err);
      } else {
        res.send();
      }
    });
  });
})



/*********** ADMIN TABLE ACCESS **************/
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

      } else if (!docs.length){
        res.status(404);
        res.send('Object not found');

      } else {
        res.send(docs);
      }
    });

  })
}).put("/:table/:id", function(req,res){
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


    if (table == 'users'){
      req.body.username = req.body.username;
      req.body.admin = req.body.admin;
      if (req.body.password) req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex');

    } else if (table == 'packages'){
      if (!req.body.name){
        res.status(400);
        return res.send("A package name is required");
      }
    }

    req.body.updatedBy = user._id;
    req.body.updated = new Date().getTime();


    db[table].update({ _id: req.params.id }, { $set: req.body }, (error,obj) => {
      if (error) {
        res.status(500);
        res.send(error);
      } else {
        res.send();
      }
    });
  }) 
}).post("/:table", function(req,res){
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


    if (table == 'users'){
      req.body.username = req.body.username;
      req.body.admin = req.body.admin;
      req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex');
    }

    req.body.updatedBy = user._id;
    req.body.updated = new Date().getTime();
    req.body.createdBy = user._id;
    req.body.created = new Date().getTime();


    db[table].insert(req.body, (error,obj) => {
      if (error) {
        res.status(500);
        res.send(error);
      } else {

        // post db updates to run
        if (table == 'packages'){
          pakcageManger.install(req.body.name,req.body.version).then( () => res.send() );
        } else {
          res.send(obj);
        }
        
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

    db[table].remove({ _id: req.params.id }, (error,num) => {
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



// make sure all packages are installed
// init the package manager and install packages
getConfiguration( (error,conf) => {
  if (error) {
    console.error(error + " Exiting.");
    process.exit(0);
  }

  config = conf;

  setupDatabase( () => {
    packageManger.initialize( () => {
      if (config.ssl){
        https.createServer({key: config._sslKey, cert: config._sslCert},app).listen(config.port, () => console.log(`Serverless is up and running at https://localhost:${config.port}!`) );
      } else {
        http.createServer(app).listen(config.port, () => console.log(`Serverless is up and running at http://localhost:${config.port}!`) );
      }
    });
  });
  
})




/**
 * Manage NPM packages for the VM 
 * @param {Function} callback - complete initialization callback
 */
function PackageManger() {
  let self = this;

  this.packages = [];

  /**
   * get packages from the database
   * @param  {Function} callback - a complete callback
   */
  this.get = function(callback){
    db.packages.find({}, (err, pkgs) => {
      if (!callback) callback = function(){};
      if (err) return callback(err);
      // insert new packages
      pkgs.forEach( pkg => { if (!self.packages.find( package => package.name == pkg.name)) self.packages.push(pkg); });
      if (callback) callback();
    });
  };

  /**
   * install a single package
   * @param  {string} name    - name of package to install
   * @param  {string} version - the version of package to install
   */
  this.install = function(name,version){
    if (!name) return;
    console.log(`Installing package ${name}@${version}`);
    if (version) return npm.install([`${name}@${version}`],{ cwd: './', save: false });
    else return npm.install([`${name}`],{ cwd: './', save: false });
  };


  /**
   * install all packages in the database
   * @param  {Function} callback - the completed callback
   */
  let installing = false;
  this.installAll = function(callback){
    if (!callback) callback = function(){};
    if (installing) return callback();
    installing = true;

    let packagesToInstall = self.packages.filter( pkg => !pkg.installed && !pkg.failed );

    if (!packagesToInstall.length) return callback();
    packagesToInstall.forEach( (pkg) => {
      self.install(pkg.name, pkg.version).then( () => {
        pkg.installed = true;
        if (!self.packages.filter( pkg => !pkg.installed ).length){
          installing = false;
          callback();
        }
      }).catch( () => {
          console.log(`ERROR: Installing package ${pkg.name} failed.`);
          pkg.failed = true;
          if (!self.packages.filter( pkg => !pkg.installed ).length){
            installing = false;
            callback();
          }
      });

    });
  }

  this.initialize = function(callback){

    // update every minutes
    let checkIntval = setInterval(self.get,60000);

    // install all packages
    let installInterval = setInterval(self.install,120000);
      
    // get packages then install them...then fire the callback...
    self.get(() => self.installAll(callback) );

  }

};
