// -- Package Imports --
const  { Schema, model } = require('mongoose');

// -- Schema --
const usersSchema = Schema({
  firstName: {
    type: String,
    required: true,
    validate: [{
        validator: val => val.length > 1 ? true : false,
        msg: 'First name must be at least 2 characters long.'
      }, {
        validator: val => val.length <= 50 ? true : false,
        msg: 'Your first name must be 50 characters at most.'
      },
    ]
  },
  lastName: {
    type: String,
    required: true
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
  // admin: {
  //   type: Boolean,
  //   default: false
  // }
});


// -- Exports --
module.exports = model('User', usersSchema, 'users');