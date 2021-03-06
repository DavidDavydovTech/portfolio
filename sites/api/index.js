// -- Env Vars --
// This initalizes our env file.
require('dotenv').config();
const {
  API_PORT,
} = process.env;

// -- Package Imports --
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const { connect } = require('mongoose');


// -- Other Imports --
const rootReducer = require('./collections/rootReducer');
const sessionAuth = require('./middleware/sessionAuth.middleware');


// -- Initalize Mongoose Connection --
connect('mongodb://localhost:27017/otzar-hasefer', {useNewUrlParser: true})


// -- Set up Vars --
const app = express();
const router = express.Router();


// -- Express Router --
router.use(sessionAuth);
router.use(rootReducer);
router.all('/*', (req, res) => {
  console.log('reached')
  res.status(503).send('The API server is currently under development and is unavailable at the moment. Please try again later.')
});


// -- Use Middlewares --
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(router);


// -- Launch app --
app.listen(API_PORT, () => {
  console.log(`Listening on port "${API_PORT}"`);
});


// -- Exports --
// module.exports = router;