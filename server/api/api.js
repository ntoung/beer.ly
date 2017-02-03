'use strict';

const router = require('express').Router();
const posts = require('./posts/postRoutes');
const breweries = require('./breweries/breweryRoutes');
const locations = require('./locations/locationRoutes');


router.use('/posts', posts);
router.use('/breweries', breweries);
router.use('/locations', locations);

module.exports = router;
