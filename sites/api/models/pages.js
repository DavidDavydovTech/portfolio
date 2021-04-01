// -- Package Imports --
const  { Schema, model } = require('mongoose');

// -- Subschemas --
// Page sections that make up the content of a page
const pageSectionSchema = Schema({
  type: String,
  content: String
});
// Metatag for stuff like react helmet
const metatagSchema = Schema({
  tag: String,
  content: String
});


// -- Schema --
const pagesSchema = Schema({
  name: {
    type: String,
    required: true,
    validate: [{
        validator: val => val.length >= 2 ? true : false,
        msg: 'Name key must be at least 2 characters long'
      },
    ]
  },
  languageId: {
    type: String,
    required: true,
  },
  content: [pageSectionSchema],
  metadata: [metatagSchema],
  protected: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  nav: {
    type: Boolean,
    default: false
  }
});


// -- Exports --
module.exports = model('Page', pagesSchema, 'pages');