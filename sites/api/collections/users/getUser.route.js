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
      res.status(200).send(users.map(e => {
        const newElement = {...e._doc};
        if (req.userInfo.admin === false) {
          delete newElement.password;
          if (newElement.hasOwnProperty('email')) {
            newElement.email = `${newElement.email.slice(0,2)}*****${newElement.email.slice(-2)}`
          }
        }
        return newElement
      }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An unkown error occoured.');
    });
});


// -- Exports --
module.exports = router;