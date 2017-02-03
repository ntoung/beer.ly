'use strict';

const router = require('express').Router();
const brewery = require('./breweryController');

router.route('/:location')
  .get(brewery.get);

module.exports = router;

