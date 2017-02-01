'use strict';

const router = require('express').Router();
const brewery = require('./breweryController');

router.route('/')
  .get(brewery.get)
  .post(brewery.post);

module.exports = router;

