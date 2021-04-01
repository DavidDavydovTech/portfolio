// -- Package Imports --
const { Router } = require('express');
const languages = require('../../models/languages');


// -- Other Imports --
const Languages = require('../../models/languages');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  const {
    showHidden,
  } = req.query;
  const filter = {};
  if (showHidden !== true) {
    filter.hidden = false;
  }
  Languages.find(filter)
    .then((languages) => {
      res.status(200).send(languages);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An unkown error occoured.');
    });
});


// -- Exports --
module.exports = router;