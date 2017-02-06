'use strict';

let config = require('../../config/apiKeys');
const stripe = require('stripe')(config.stripeTestKey);


exports.get = (req, res, next) => {
  actions.get[req.url](req, res);
};

exports.post = (req, res, next) => {
  actions.post[req.url](req, res);
};



// Checkout handler with Stripe
var charge = function(req, res) {
  console.log('Charging user...');

  var token = req.body.stripeToken;

  var charge = stripe.charges.create({
    amount: req.body.amount || 1600,
    currency: 'usd',
    description: 'Beerly flight',
    source: token
  }, function(err, charge) {
    if (err) {
      console.log('Error charging.');
      res.json(err);
    } else {
      console.log('Successful charge!');
      res.json(charge);
    }
  });
}


// Action handlers

var actions = {
  get: {
  },
  post: {
    '/': charge,
  }
}
