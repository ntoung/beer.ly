'use strict';

const router = require('express').Router();
const user = require('./userController');

router.route('/')
  .get(user.get)
  .post(user.post);

module.exports = router;
