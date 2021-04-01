// -- Package Imports --
const  { Schema, model } = require('mongoose');

// -- Subschemas --
// Metatag for stuff like react helmet
const metaSchema = Schema({
  title: String,
  keywords: [String],
  desc: String,
});
// Page sections that make up the content of a page
const contentSchema = Schema({
  title: String,
  desc: String,
  content: String,
  meta: metaSchema,
});



// -- Schema --
const blogSchema = Schema({
  name: {
    type: String,
    required: true,
    validate: [{
        validator: val => val.length >= 2 ? true : false,
        msg: 'Name key must be at least 2 characters long'
      },
    ]
  },
  he: contentSchema,
  de: contentSchema,
  en: contentSchema,
  fr: contentSchema,
  thumbnail: String,
  status: {
    type: String,
    default: 'active',
    validate: [{
        validator: val => ['active', 'inactive'].includes(val),
        msg: 'Status must be active or inactive but got a different value instead.'
      },
    ]
  },
});


// -- Exports --
module.exports = model('Blog', blogSchema, 'blogs');