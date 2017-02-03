'use strict';

const router = require('express').Router();
const location = require('./locationController');

router.route('/:locationPartial')
  .get(location.get);

module.exports = router;

