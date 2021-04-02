// -- Package Imports --
const  { Schema, model } = require('mongoose');


// -- Constants --
const visibilityTypes = ['promoted', 'visible', 'hidden', 'invisible'];


// -- Schema --
const projectSchema = Schema({
  name: {
    type: String,
    required: true,
    validate: [{
        validator: val => val.length >= 1,
        msg: 'Name key must be at least 1 characters long'
      },
    ]
  },
  url: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    default: 'visible',
    validate: [{
        validator: val => visibilityTypes.includes(val),
        msg: `Status must be one of the following: ${visibilityTypes.join(', ').slice(0, -2)}`
      },
    ]
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});


// -- Exports --
module.exports = model('Project', projectSchema, 'projects');