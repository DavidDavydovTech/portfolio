// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Page = require('../../../models/pages');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  const {
    languageId
  } = req.query;

  const filter = { languageId, nav: true };
  
  Page.find(filter)
    .then((pages) => {
      res.status(200).send(pages);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});


// -- Exports --
module.exports = router;