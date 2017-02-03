'use strict';

const router = require('express').Router();
const beer = require('./beerController');

router.route('/:brewery')
  .get(beer.get);

module.exports = router;
