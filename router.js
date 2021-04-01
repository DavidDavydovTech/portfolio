// -- Env Vars --
// This initalizes our env file.
require('dotenv').config();
const {
  API_SUBDOMAIN,
  API_PORT,
  // CLIENT_SUBDOMAIN,
  CLIENT_PORT,
} = process.env;

console.log(API_SUBDOMAIN, API_PORT)

// -- Package Imports --
const { readdirSync } = require('@jsdevtools/readdir-enhanced');
const { join } = require('path');
const { Router } = express = require('express');
const expressSubdomain = require('express-subdomain');
const proxy = require('express-http-proxy');
const cors = require('cors');


// -- Set up Vars --
const app = express();
const router = Router();


// Dynamically add methods/routes to API
const siteConfigs = readdirSync('../sites', {deep: 2, filter: /.*\.site/, });
const usedSubdomains = [];
console.log('\nINITALIZING ROUTES:\n')
for (let siteConfig of siteConfigs) {
  let siteApp;
  const {
    type,
    location,
    subdomains
  } = site = require(siteConfig);
  // Initialize the 'App' for this site.
  if (type.toLowerCase() === 'file') {
    siteApp = require(location);
  } else if (type.toLowerCase() === 'url') {
    siteApp = proxy(location);
  } else throw new Error(`Invalid .site type ${type}<${typeof type}>`)
  // Now assign the 'App' to every subdomain given.
  subdomains.forEach( subdomain => {
    let useSubdomain = subdomain !== '__DEFAULT__';
    if (useSubdomain) {
      router.use(expressSubdomain(subdomain, siteApp));
    } else {
      router.use('/', siteApp);
    }
    usedSubdomains.push(useSubdomain ? subdomain : '__DEFAULT__');
  });
}
console.log('\n')


// -- Set up Express App --
app.use(cors({ origin: (origin, cb) => cb(null, true)}));
app.use(router);


// -- Exports --
module.exports = app;