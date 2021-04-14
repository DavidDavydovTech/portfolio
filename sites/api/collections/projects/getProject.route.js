// -- Package Imports --
const { Router } = require('express');


// -- Other Imports --
const Project = require('../../models/project');


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

    Project[_id ? 'findOne' : 'find'](filter)
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