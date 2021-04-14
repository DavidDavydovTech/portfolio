// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Blog = require('../../models/blogs');


// -- Set up Vars --
const router = Router();


// -- Routes --
router.get('/', (req, res) => {
  let {
    _id,
    visibility = ['promoted', 'visible', ...(_id ? ['hidden'] : [])],
  } = req.body;

  if (req.userInfo.admin === false && visibility.includes('invisible')) {
    res.status(403).send('Sorry you must be an admin to do this.');
  } else {
    const filter = { ...(_id ? {_id} : {}), visibility: {$in: visibility} };

    Blog[_id ? 'findOne' : 'find'](filter)
      .then((blogPost) => {
        res.status(200).send(blogPost);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err.message);
      });
  }

});


// -- Exports --
module.exports = router;