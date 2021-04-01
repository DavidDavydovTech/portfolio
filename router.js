// -- Env Vars --
// This initializes our env file.
require('dotenv').config();

// -- Package Imports --
const { readdirSync } = require('@jsdevtools/readdir-enhanced');
const { join } = require('path');
const express = require('express'), { Router } = express;
const expressSubdomain = require('express-subdomain');
const proxy = require('express-http-proxy');
const cors = require('cors');


// -- Set up Vars --
const app = express();
const router = Router();


// Dynamically add methods/routes to API
const siteConfigPaths = readdirSync('./sites', {
  deep: 2,
  filter: /.*\.site\.json/,
  sep: '/',
  basePath: `${__dirname}/sites`
});
const usedSubdomains = [];
console.log('\nINITALIZING ROUTES:\n')
for (let siteConfigPath of siteConfigPaths) {
  let siteApp;
  const site = require(siteConfigPath), {
    type,
    location,
    subdomains
  } = site;
  // Initialize the 'App' for this site.
  if (type.toLowerCase() === 'file') {
    let pathToFile = siteConfigPath.split('/');
    pathToFile.pop();
    pathToFile = join(pathToFile.join('/'), location);
    siteApp = require(pathToFile);
  } else if (type.toLowerCase() === 'url') {
    siteApp = proxy(location);
  } else throw new Error(`Invalid .site type "${type}"<${typeof type}>.`)
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