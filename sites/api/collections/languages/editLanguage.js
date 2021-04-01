// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Language = require('../../models/languages');
// const { hash } = require('bcrypt');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.put('/', (req, res) => {
  const { _id } = req.body;
  const updatedLanguage = {
    name, 
    nameNative, 
    ISO639,
    hidden,
    rightToLeft,
  } = req.body;
  
  Language.updateOne({_id}, updatedLanguage).exec()
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