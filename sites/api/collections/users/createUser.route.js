// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Users = require('../../models/users');
const { hash } = require('bcrypt');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.post('/', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;
  const newUserValidation = new Users(
    {
      firstName,
      lastName,
      email,
      password
    }
  );

  (new Promise((resolve, reject) => {
    newUserValidation.validate(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  }))
    .then(() => new Promise((resolve, reject) => {
      hash(password, 10, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      })
    }))
    .then(hash => {
      const newUserInfo = {
        firstName,
        lastName,
        email,
        password: hash
      };

      return Users.findOne({ email }).exec()
        .then(user => {
          console.log('user found:', user)
          if (user !== null) {
            throw new Error('A user with that email already exists!')
          } else {
            return newUserInfo;
          }
        });
    })
    .then((newUserInfo) => {
      return Users.create(newUserInfo);
    })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

// -- Exports --
module.exports = router;