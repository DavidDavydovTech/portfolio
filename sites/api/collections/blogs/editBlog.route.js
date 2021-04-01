// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Blog = require('../../models/blogs');
// const { hash } = require('bcrypt');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.put('/', (req, res) => {
  const { _id } = req.body;
  const updatedBlog = Object.assign({}, req.body);
  delete updatedBlog._id;

  Blog.updateOne({_id}, updatedBlog).exec()
    .then((dbRes) => {
      console.log(dbRes)
      res.status(200).send(dbRes);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err.message);
    });
});

// -- Exports --
module.exports = router;