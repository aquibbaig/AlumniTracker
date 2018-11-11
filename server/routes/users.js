var express = require('express');
var router = express.Router();
const alumniModel = require('../models/alumnus')
const studentModel = require('../models/students')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/alumReg',  (req, res) => {
    console.log('Alumni Registration');
    console.log(req.body)



    // ADD VALIDATION
    console.log(req.body.username)
     alumniModel.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("username exists")
            res.json(500, {
                error: `Sorry, already a user with the username: ${req.body.username}`
            })
        }
        else {
            console.log("All Clear")
            const newUser = new alumniModel( req.body);
            newUser.save((err, savedUser) => {
                console.log("saving")
                if (err) return res.json(err)
                console.log(savedUser)
                return res.json(savedUser)
            })
        }
    })


})

router.post('/studReg',  (req, res) => {
    console.log('Student Registration');
    console.log(req.body)



    // ADD VALIDATION
    console.log(req.body.username)
     studentModel.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("username exists")
            res.json(500, {
                error: `Sorry, already a user with the username: ${req.body.username}`
            })
        }
        else {
            console.log("All Clear")
            const newUser = new studentModel( req.body);
            newUser.save((err, savedUser) => {
                console.log("saving")
                if (err) return res.json(err)
                console.log(savedUser)
                return res.json(savedUser)
            })
        }
    })


})

module.exports = router;
