var express = require('express');
var router = express.Router();
const postModel = require('../models/post')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newpost', (req, res, next) => {
  console.log(req.body.date);
  const model = new postModel({
    post: req.body.post,
    postDate: req.body.date
  })
  console.log(model);
  model.save()
    .then((savedPost) => {
      console.log(savedPost);
      res.send('saved Successfully')
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
})

module.exports = router;
