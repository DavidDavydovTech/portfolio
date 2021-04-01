// -- Package Imports --
const  { Schema, model } = require('mongoose');

// -- Schema --
const languageSchema = Schema({
  name: {
    type: String,
    required: true
  },
  nameNative: {
    type: String,
    required: true
  },
  ISO639: {
    type: String,
    required: true,
    unique: true,
    validate: [{
        validator: val => val.length === 2 ? true : false,
        msg: 'Language key must be exactly 2 characters long'
      }, {
        validator: val => val.length === 2 ? true : false,
        msg: 'Language key must be lowercase only'
      },
    ]
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  rightToLeft: {
    type: Boolean,
    default: false,
  },
});


// -- Exports --
module.exports = model('Language', languageSchema, 'languages');