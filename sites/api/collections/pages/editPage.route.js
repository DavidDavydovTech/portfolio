// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Page = require('../../models/pages');
// const { hash } = require('bcrypt');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.put('/', (req, res) => {
  const { _id } = req.body;
  const updatedPage = {
    name, 
    languageId, 
    content,
    metadata,
    hidden
  } = req.body;
  
  Page.updateOne({_id}, updatedPage).exec()
    .then((dbRes) => {
      console.log(dbRes)
      res.status(200).send(dbRes);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err.message);
    });
});

// -- Exports --
module.exports = router;