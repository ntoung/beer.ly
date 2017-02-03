'use strict';

const User = require('./userModel');
const jwt = require('jsonwebtoken');
let config = require('../../config/apiKeys');


exports.get = (req, res, next) => {
  actions.get[req.url](req, res);
};

exports.post = (req, res, next) => {
  actions.post[req.url](req, res);
};


var getUser = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      throw err; 
    } else {
      res.json(users);
    }
  });
};

// Register new users
var registerUser = function(req, res) {
  console.log('Registering user...');
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      message: 'Please enter username and password.'
    });
  } else {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          message: 'That username already exists.'
        });
      } else {
        res.json({
          success: true,
          message: 'Successfully created new user.'
        })
      }
    })
  }
}

// Authenticate the user and get a JSON Web Token to include in 
// the header of future requests.
var logIn = function(req, res) {
  console.log('Logging into user...');
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      throw err
    } 

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      // Check if password is matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user, config.beerlyAuthSecret, {
            expiresIn: '2 days'
          });
          res.json({
            success: true,
            message: 'Authentication successful',
            token
          });
        } else {
          res.json({
            success: false,
            message: 'Authentication failed. Password did not match.'
          });
        }
      });      
    }
  });
}


// Action handlers

var actions = {
  get: {
    '/': getUser
  },
  post: {
    '/register/': registerUser,
    '/logIn/': logIn
  }
}
