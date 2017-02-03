'use strict';

const router = require('express').Router();


const beers = require('./beers/beerRoutes');
const breweries = require('./breweries/breweryRoutes');
const locations = require('./locations/locationRoutes');


router.use('/beers', beers);
router.use('/breweries', breweries);
router.use('/locations', locations);

module.exports = router;
