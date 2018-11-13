var express = require('express');
var router = express.Router();
const alumniModel = require('../models/alumnus')
const studentModel = require('../models/students')
const postModel = require('../models/post')
const passport = require('../passport');
const jwt = require('jsonwebtoken')
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

router.post('/alumniLogin',
        function (req, res, next) {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.body)
            next()
        },
        passport.authenticate('alumni-local', {session: false}),
        (req, res) => {
            const token = jwt.sign({username: req.user.username}, "eita_jwt_secret");
            console.log('logged in', req.user);
            alumniModel.find({username: req.user.username}, (err,data) => {
              if(err) console.log(err);
              else {
                console.log(token)
                console.log(req.user.username)
                return res.send({username: req.user.username, token, details: data[0]})
                console.log("User Verified")
              }
            })
        }

    )

router.post('/studentLogin',
        function (req, res, next) {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.body)
            next()
        },
        passport.authenticate('student-local', {session: false}),
        (req, res) => {
            console.log("Authenticated")
            const token = jwt.sign({username: req.user.username}, "eita_jwt_secret");
            console.log('logged in', req.user);
            studentModel.find({username: req.user.username}, (err,data) => {
              if(err) console.log(err);
              else {
                console.log(token)
                console.log(req.user.username)
                return res.send({username: req.user.username, token, details: data[0]})
                console.log("User Verified")
              }
            })
        }

    )

  router.get('/:token', (req, res, next) => {
      console.log('===== user!!======')
      console.log(req.params.token);
      jwt.verify(req.params.token, 'eita_jwt_secret', function(err, decoded) {
        if(err) {
          console.log("not verified")
          return res.status(200).send(err);
        }
        else {
        console.log(decoded) //if session exists find by username and the send the whole data
        alumniModel.find({username: decoded.username}, (err,data) => {
          console.log("Verifiying In Alumni");
          console.log(data)
          if(err){
            console.log(err)
          }
          if(data.length == 0){
            console.log("Veriying In Students")
            studentModel.find({username: decoded.username}, (err, data) => {
              if(err){
                console.log(err);
              }
              else {
                console.log("Sent from Students")
                return res.status(200).send(data[0])
              }
            })
          }
          else {
            console.log("Sent form Alumni");
            return res.status(200).send(data[0])
          }
        })
      }
      })
  })

  router.get('/profile/:username', (req, res) => {
    console.log("gfaksgfkaugfuasgfugaugf",req.params.username);
    let arr;
    alumniModel.findOne({username: req.params.username}, (err, details) => {
      if(err) console.log(err);
      // console.log(details);
      if(details.length == 0) {
        studentModel.findOne({username: req.params.username}, (err, data) => {
          if(err) console.log(err);
          // console.log(data);
          res.send(data)
       })
      }
      else {
        res.send(details)
      }
    })
  })

router.post('/logout', (req, res) => {
      if (req.user) {
          req.logout()
          res.send({ msg: 'logging out' })
      } else {
          res.send({ msg: 'no user to log out' })
      }
  })

router.get('/all/profiles', (req,res) => {
  alumniModel.find({}, (err, data) => {
    if(err) {
      console.log(err);
    }
    else{
      res.send(data)
    }
  })
})

router.get('/all/posts', (req,res) => {
  postModel.find({}, (err, data) => {
    if(err) {
      console.log(err);
    }
    else{
      res.send(data)
    }
  })
})






module.exports = router;
