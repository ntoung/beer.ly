'use strict'

const router = require('express').Router()
const users = require('./users/userRoutes')
const posts = require('./posts/postRoutes')

router.use('/users', users)
router.use('/posts', posts)

module.exports = router
