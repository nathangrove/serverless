const express = require('express')
const app = express()

app.get('/run', function (req, res) {

  const {NodeVM} = require('vm2');

  const vm = new NodeVM({
    console: 'redirect',
    sandbox: {},
    require: {
      external: true,
      root: './vm/node_modules'
    }
  });

  let executionCode = `
    var request = require('./vm/node_modules/request');
    request(vars.url, function (error, response, body) {
      console.error(error);
      if (!error && response.statusCode == 200) {
        callback(body); // Show the HTML for the Google homepage.
      }
    })`;

  let runFunc = vm.run(`
    module.exports = function(vars,callback){
      ${executionCode}
    };
  `,'vm.js');

  runFunc({ url: 'https://nathangrove.com' }, output => {
    res.send(output);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')

})

