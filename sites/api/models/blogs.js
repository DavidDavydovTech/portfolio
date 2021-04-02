// -- Package Imports --
const  { Schema, model } = require('mongoose');


// -- Constants --
const visibilityTypes = ['promoted', 'visable', 'hidden', 'invisible'];


// -- Schema --
const blogSchema = Schema({
  name: {
    type: String,
    required: true,
    validate: [{
        validator: val => val.length >= 1 ? true : false,
        msg: 'Name key must be at least 1 characters long'
      },
    ]
  },
  content: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    default: 'markdown',
    validate: [{
      validator: val => ['markdown', 'jsx'].includes(val),
      msg: 'Status must be markdown or jsx but got a different value instead.'
    }]
  },
  thumbnail: {
    type: String,
    required: true,
  },
  visability: {
    type: String,
    default: 'visable',
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
module.exports = model('Blog', blogSchema, 'blogs');