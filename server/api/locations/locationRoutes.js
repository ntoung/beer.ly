'use strict';

const router = require('express').Router();
const location = require('./locationController');

router.route('/:locationPartial')
  .get(location.get)
  .post(location.post);

module.exports = router;

