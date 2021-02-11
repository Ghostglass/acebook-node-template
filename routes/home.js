var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser')
var logger = require ('morgan');
require("dotenv").config();
// var indexRouter =require('./routes/index');
//var apiResponse = require('./helpers/apiResponse');
//var cors = require('cors');
var router = express.Router(); // this allows us to set up HTTP routes

var HomeController = require('../controllers/home');
var SignUpController = require('../controllers/signup');
var LoginController = require('../controllers/login');
var ContentController = require('../controllers/content');
const { route } = require('./content');
const User = require('../models/users');
const morgan = require('morgan');

router.get('/', HomeController.Index);
router.get('/signup', SignUpController.SignUp);
router.get('/login', LoginController.Login);
router.get('/content', ContentController.Index);

// Create a new user
router.post('/content', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  })

  newUser.save((err, newUser) =>
   {
    if (err) {
      res.send(err);
    }
    res.json(newUser)
    //res.redirect('/content')
  });
  //res.send(req.body.username)
});

router.post('/login', (req, res) => {
  res.redirect('/content')
});

// app.param('user', function (req, res, next, id) {
//   // try to get the user details from the User model and attach it to the request object
//   User.find(id, function (err, user) {
//     if (err) {
//       next(err)
//     } else if (user) {
//       req.user = user
//       next()
//     } else {
//       next(new Error('failed to load user'))
//     }
//   })
// })

module.exports = router; // export the router so that app.js can require it
