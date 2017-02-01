'use strict';

const router = require('express').Router();
const users = require('./users/userRoutes');
const posts = require('./posts/postRoutes');
const breweries = require('./breweries/breweryRoutes');

console.log('api routing');

router.use('/users', users);
router.use('/posts', posts);
router.use('/breweries', breweries);

module.exports = router;
