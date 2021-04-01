// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Page = require('../../models/pages');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.post('/', (req, res) => {
  const newPage = { 
    name, 
    languageId, 
    content,
    metadata,
    hidden,
    nav,
  } = req.body;
   
  Page.create(newPage)
    .then((dbRes) => {
      res.status(200).send(dbRes);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err.message);
    });
});

// -- Exports --
module.exports = router;