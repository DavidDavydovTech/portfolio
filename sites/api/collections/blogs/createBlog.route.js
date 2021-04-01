// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Blog = require('../../models/blogs');

// -- Set up Vars --
const router = Router();


// -- Routes --
router.post('/', (req, res) => {
  const newBlog = req.body;
   
  Blog.create(newBlog)
    .then((dbRes) => {
      res.status(200).send(dbRes);
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err.message);
    });
});

// -- Exports --
module.exports = router;