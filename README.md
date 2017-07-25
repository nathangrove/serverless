# Serverless

Serverless is a simple task/functions runner that scales easily. It has a unique life cycle different from most (all that I've seen) other FAAS platforms.

## Serverless Lifecycle
1. Develop your code in javascript (nodejs)
2. Send your code to the server and have it encrypted
3. Package the encrypted code from the server into your application
4. Send your code with any parameters to the server when it needs to be executed.

The code is never stored on the server, only validated, encrypted, and the key to decrypt it is stored. There are several pros and cons, so you will have to decide if it is right for your project.

### Pros
- Safe way to bundle code (including any data access keys) into your client application
- Client agnostic
- Scales easily

### Cons
- More data trasnfer (each call has to post the code to run)
- Encryption and Decryption consume processing cycles


## Getting Started

You can clone the repo and issue `npm install` followed by `npm start` to get up and running. For more advanced usage, you can configure the server.

## Configuration
The server can be configured to use a common MongoDB instance or a simple local JSON based database. JSON configuration file.

`ssl: boolean (true default)
port: number (3000 default)
sslCert: string (generated default)
sslKey: string (generated default)
database: object (local database)
database.type: local|mongo (local default)
database.location: string (where to store data files only with "local" database)
database.url: string (only with mongo database)
database.username: string (mongo username)
database.password: string (mongo password)`

### Prerequisites

The server can be all self contained, it can run on a minimal server configuration. If you wanted to run it accross multiple servers, you should configure a common MongoDB instance for data storage.

### Installing

Install the libraries `npm install`
Change the salts at the top of index.js. You can change the strings to anything you want.
Then you can either run it once `npm run` or use a process monitor like nodemon `nodemon index.js` or forever `forever index.js`
You can add any files you want served to the `public` folder in the root folder.
The default username and password for any authorized API calls is `admin:admin123`


### Authentication

You can use JWT or Basic Auth for authentication. To get a JWT Token, submit a POST request to `/login` with the `username` and `password` and parameters.

Login Example using CURL
`curl -X POST \
  https://localhost:3000/login \
  -d '{
	"username": "admin",
	"password": "admin123"
}'`

### Available API Calls

`/run` - POST - Unauthorized - Allows POSTed encrypted `code` to be executed and the results returned.
`/mycalls` - GET|POST|PUT|DELETE - Authorized - Allows a user to create, read, update, and delete calls they own/created. The server does not store the actual encrtyped code, but rather the key to decrypt the code. So it is important to keep the encrypted response.
`/calls` - GET|POST|PUT|DELETE - Authorized (Server Admin) - Allows an admin to create/read/update/delete all encryption keys in the database.
`/users` - GET|POST|PUT|DELETE - Authorized (Server Admin) - Allows an admin to create/read/update/delete all users in the system (including other admins)
`/packages` - GET|POST|PUT|DELETE - Authorized (Server Admin) - Allows an admin to create/read/update/delete allowed NPM packages that user's code can run.

### What code call be encrypted?
The code is ran as an expressjs call handler. It is function that passes in the request's Request and Response objects as variables `reqesut` and `response`.

They can be in two formats, as a module, or as function code. Either must contain `response.send`.

Module: `module.exports = function(request,response){ response.send("Hello world!"); }` 
Function Code: `response.send("Hello world!");` 

### Usage Example

Encrypt Code: `curl -X POST \
  https://serverless.nathangrove.com/mycalls \
  -H 'authorization: Basic YWRtaW46YWRtaW4xMjM=' \
  -d '{
  "name": "A simple requesty proxy",
  "code": "if (!request.query.url) return response.send('\''A URL is requried as a query parameter'\''); var requestModule = require('\''request'\''); requestModule(request.query.url, function (error, res, body) { if (!error && res.statusCode == 200) { response.send(body); }})"
}'` 

Run Code: `curl -X POST \
  https://localhost:3000/run \
  -d '{
  "code": "5b16baaabdeba43379b27b70355579759bc857202f2caf0134a948e373f466dcfc6c8d81061cf7eeb1a6b6e0d5296985d26177db8813528139db8026f2933f17d4cd3dca66ffee33c0cf4dca19e7496b"
}'`

## Built With

* [Nodemon](https://nodemon.io/) - Development server reloader
* [VM2](https://www.npmjs.com/package/vm2) - The sandbox that runs the code
* [ExpressJS](https://expressjs.com/) - Server framework for route handling
* [JWT](https://jwt.io/) - The new cool way to handle authentication without serverside sessions

## Contributing

Fork! Modify! Request Pull!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
