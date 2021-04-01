// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Blog = require('../../models/blogs');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  const {
    _id,
    showHidden,
    langCode,
  } = req.query;

  if (_id) {
    const filter = { _id };
    if (langCode) {
      Blog.findOne(filter)
        .then((blogPost) => {
          res.status(200).send(blogPost[langCode]);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    } else {
      Blog.findOne(filter)
        .then((blogPost) => {
          res.status(200).send(blogPost);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    }
  } else {
    if (langCode) {
      Blog.find()
        .then((blogPosts) => {
          blogPosts = blogPosts.map( e => {
            console.log('LANG CODE:', langCode)
            const filteredBlog = e[langCode];
            if (filteredBlog) filteredBlog._id = e._id;
            return filteredBlog;
          });
          res.status(200).send(blogPosts);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    } else {
      Blog.find()
        .then((blogPosts) => {
          res.status(200).send(blogPosts);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    }
  }
});


// -- Exports --
module.exports = router;