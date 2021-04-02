// -- Package Imports --
const  { Schema, model } = require('mongoose');


// -- Schema --
const usersSchema = Schema({
  firstName: {
    type: String,
    required: true,
    validate: [{
      validator: val => val.length > 1,
      msg: 'Your first name must be at least 1 characters long.'
    }, {
      validator: val => val.length <= 50,
      msg: 'Your first name must be 50 characters at most.'
    }],
  },
  lastName: {
    type: String,
    required: true,
    validate: [{
      validator: val => val.length > 1,
      msg: 'Your last name must be at least 1 characters long.'
    }, {
      validator: val => val.length <= 50,
      msg: 'Your last name must be 50 characters at most.'
    }],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});


// -- Exports --
module.exports = model('User', usersSchema, 'users');