#!/bin/bash

# encrypt some simple http proxy code
ENCRYPTED=$(curl -X POST \
  http://localhost:3000/encrypt \
  -H 'authorization: Basic YWRtaW46YWRtaW4xMjM=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -s \
  -d '{
  "code": "if (!request.query.url) return response.send('\''A URL is requried as a query parameter'\''); var requestModule = require('\''./vm/node_modules/request'\''); requestModule(request.query.url, function (error, res, body) { if (!error && res.statusCode == 200) { response.send(body); }})"
}')

# execute the code
echo $(curl -X POST \
  'http://localhost:3000/run?url=https%3A%2F%2Fnathangrove.com' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -s \
  -d "{
  \"code\": \"$ENCRYPTED\"
}")

