'use strict'

const router = require('express').Router()
const post = require('./postController')

router.route('/')
  .get(post.get)
  .post(post.post)

module.exports = router
