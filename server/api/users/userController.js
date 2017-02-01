'use strict';

// const User = require('./userModel')

exports.get = (req, res, next) => {
  res.end();
  // User.find({})
  // .then((user) => {
  //   if (user) {
  //     res.json(user)
  //   } else {
  //     console.log('No users in database')
  //   }
  // })
};

exports.post = (req, res, next) => {
  res.end();
  // let newUser = new User({
  //   username: req.body.username,
  //   password: req.body.password
  // })
  //
  // newUser.save()
  // .then((user) => {
  //   if (user) {
  //     res.json(user)
  //   } else {
  //     console.log('Could not save user')
  //   }
  // })
};
