'use strict';

const router = require('express').Router();
const checkout = require('./checkoutController');

router.route('/*')
  .get(checkout.get)
  .post(checkout.post);


module.exports = router;
