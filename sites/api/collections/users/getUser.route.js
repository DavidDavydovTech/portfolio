// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Users = require('../../models/users');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  Users.find({})
    .then((users) => {
      console.log(users);
      res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An unkown error occoured.');
    });
});


// -- Exports --
module.exports = router;