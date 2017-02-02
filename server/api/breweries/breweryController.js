'use strict';

const axios = require('axios');

// const Post = require('./postModel')
const _API_KEY = require('../../config/apiKeys.js').breweryDBKey;
const _API_BASEURL = 'http://api.brewerydb.com/v2/';



exports.get = (req, res, next) => {

  // breweryDB endpoint
  var endPoint = 'locations/';

  // endpoint query options
  var queryOptions = {
    //locality: 'San Francisco'
    locality: req.params.location,
    p: '1'
  };

  // axios RESTful API call
  axios.get(createUrl(endPoint, queryOptions))
  .then(function (response) {
    res.end(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

}

exports.post = (req, res, next) => {
  // console.log('brewery post controller');

}

// Helper formatting function for connecting to breweryDB
var createUrl = function(endPoint, queryOptions) {
  var key = '?key=' + _API_KEY;

  var queryStrings = [];

  // Create query string from all query options
  for (let query in queryOptions) {
    if (typeof queryOptions[query] === 'string') {
      // encode spaces for url if query option is string
      queryStrings.push(query + '=' + queryOptions[query].replace(' ', '+'));
    } else {
      queryStrings.push(query + '=' + queryOptions[query]);
    }
  }

  return _API_BASEURL + endPoint + key + '&' + queryStrings.join('&');
}
