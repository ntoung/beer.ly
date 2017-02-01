'use strict';

const axios = require('axios');

// const Post = require('./postModel')
const _API_KEY = require('../config/apiKeys.js').breweryDBKey;
const _API_ENDPOINT = 'http://api.brewerydb.com/v2/';

exports.get = (req, res, next) => {
  console.log('brewery get controller');
  

  // Post.find({})
  // .then((post) => {
  //   if (post) {
  //     res.json(post)
  //   } else {
  //     console.log('No posts in database')
  //   }
  // })
}

exports.post = (req, res, next) => {
  console.log('brewery post controller');
  // let newPost = new Post({
  //   title: req.body.title,
  //   text: req.body.text,
  //   author: req.body.author
  // })
  //
  // newPost.save()
  // .then((post) => {
  //   if (post) {
  //     res.json(post)
  //   } else {
  //     console.log('Could not save post')
  //   }
  // })
}
