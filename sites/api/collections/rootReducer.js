// -- Package Imports --
const { Router } = require('express');
const { readdirSync } = require('@jsdevtools/readdir-enhanced');
const { join } = require('path');


// -- Setup Vars --
const router = Router();


// Dynamically add methods/routes to API
// const files = readdirSync(__dirname);
const routePaths = readdirSync(__dirname, {deep: true, filter: /.{0,}\.route\.js/});
console.log('\nINITALIZING ROUTES:\n')
for (let routePath of routePaths) {
  const pathArray = routePath.split('/');
  const filename = pathArray.pop();
  if (pathArray.length > 0) {
    const prePath = '/' + pathArray.join('/');
    const routePathFull = join(__dirname, routePath);
    console.log(`${prePath}:`, filename)
    router.use(prePath, require(routePathFull));
  } else {
    const routePathFull = join(__dirname, routePath);
    console.log(`/:`, filename)
    router.use(require(routePathFull));
  }
}
console.log('\n')


// -- Exports --
module.exports = router;