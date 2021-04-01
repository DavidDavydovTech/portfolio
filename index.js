// -- Env Vars --
// This initalizes our env file.
require('dotenv').config();
const {
  ROUTER_PORT,
  PRIVATE_KEY,
  CERTIFICATE,
} = process.env;
console.log('ROUTER PORT:', ROUTER_PORT);


// -- Package Imports --
const { readFileSync } = require('fs');
const { join } = require('path');
const { createServer } = require('https');


// -- Other Imports --
const router = require('./router');


// -- Set up Variables --
const cert = readFileSync( join( __dirname, '_secrets', CERTIFICATE) );
const key = readFileSync( join(__dirname, '_secrets', PRIVATE_KEY));
const server = createServer({cert, key}, router);


// -- Launch app --
console.log(ROUTER_PORT);
server.listen(ROUTER_PORT);




