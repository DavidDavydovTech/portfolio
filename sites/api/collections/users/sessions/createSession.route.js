// -- Package Imports --
const { Router } = require('express');
const { compare, hash } = require('bcrypt');
const { sign } = require('jsonwebtoken')
const { nSQL } = require('@nano-sql/core');

// -- Other Imports --
const Users = require('../../../models/users');
const createSession = require('../../../lib/createSession');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.post('/', (req, res) => {
  const userData = {
    email,
    password
  } = req.body;

  Users.findOne({ email })
  .exec()
  .then((user) => {
    if (user === null) throw new Error('Invalid Email/Password combination.');
    return user;
  })
  .then( user => new Promise((resolve, reject) => {
    compare(password, user.password, function(err, doesMatch) {
      if (err) reject(err);
      if (doesMatch === false) reject(new Error('Invalid Email/Password combination.'));
      resolve(user);
    });
  }))
  .then( user => new Promise((resolve, reject) => {
    compare(password, user.password, function(err, doesMatch) {
      if (err) reject(err);
      if (doesMatch === false) reject(new Error('Invalid Email/Password combination.'));
      resolve(user);
    });
  }))
  .then( user => new Promise((resolve, reject) => {
    try {
      const userObject = {...user.toObject()};
      resolve(createSession(userObject));
    } catch (err) {
      reject(err);
    }
  }))
  .then( queryResult => {
    res.cookie('otzarHaSeferAuth', queryResult[0].id)
    res.status(200).send('Logged in successfully...')
  })
  .catch( (err) => {
    res.status(400).send(err.message);
  });
});

// -- Exports --
module.exports = router;