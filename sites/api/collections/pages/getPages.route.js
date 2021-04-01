// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Page = require('../../models/pages');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  const {
    id,
    showHidden,
    languageId,
  } = req.query;

  const filter = {};
  if (showHidden !== true) { filter.hidden = false; }
  if (id !== undefined) { filter._id = id; }
  if (languageId !== undefined) { filter.languageId = languageId; }
  
  Page.find(filter)
    .then((pages) => {
      res.status(200).send(pages);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An unkown error occoured.');
    });
});


// -- Exports --
module.exports = router;