'use strict';

const router = require('express').Router();
const users = require('./users/userRoutes');
const beers = require('./beers/beerRoutes');
const breweries = require('./breweries/breweryRoutes');
const locations = require('./locations/locationRoutes');


router.use('/users', users);
router.use('/breweries', breweries);
router.use('/beers', beers);
router.use('/locations', locations);

module.exports = router;
