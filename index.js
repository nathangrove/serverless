const app = require('express')();
var bodyParser = require('body-parser')
var crypto = require('crypto');
let algorithm = 'aes256';
var UglifyJS = require("uglify-js");

let keys = {};

app.use(bodyParser.json());

app.post('/encrypt', function(req,res){

  // wrap the code in commonjs module and then uglify it.
  let code = UglifyJS.minify('module.exports = function(request,response){' + req.body.code + '};').code;

  // generate a crypto key
  let key = crypto.createHash('md5').update(code + 'saltedWithSaltySalt' ).digest('hex');

  // init the cipher
  var cipher = crypto.createCipher(algorithm, key);  

  // encrypt the code
  let encrypted = cipher.update(code, 'utf8', 'hex') + cipher.final('hex');

  // store the encryption key
  keys[crypto.createHash('md5').update(encrypted).digest('hex')] = key;

  // send the encrypted code
  res.send(encrypted);
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
  let key = keys[crypto.createHash('md5').update(encryptedCode).digest('hex')];
  if (!key) {
    res.status(500);
    return res.send('Invalid code');
  }

  // convert key into buffer
  key = Buffer.from(key,'utf8');

  // create the decipher
  var decipher = crypto.createDecipher(algorithm, key);

  // decrypt
  var executionCode = decipher.update(encryptedCode, 'hex', 'utf8') + decipher.final('utf8');

  // prepare the vm
  let runFunc = vm.run(executionCode,'vm.js');

  // run the code
  runFunc(req, res);

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')

})

