'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  username: {
    type: String, 
    unique: true, 
    require: true
  },
  password: {
    type: String, 
    require: true
  }
});

// Hash the user's password before inserting a new user
UserSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      } else {
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          } else {
            user.password = hash;
            next();
          }
        });
      }
    });
  } else {
    return next();
  }
});

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    } else {
      cb(null, isMatch);
    }
  })
}

// Export the model
module.exports = mongoose.model('User', UserSchema);
