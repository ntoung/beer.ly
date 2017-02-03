const axios = require('axios');

// const Post = require('./postModel')
const _API_KEY = require('../../config/apiKeys.js').breweryDBKey;
const _API_BASEURL = 'http://api.brewerydb.com/v2/';

// Helper formatting function for connecting to breweryDB
const createUrl = function(endPoint, queryOptions) {
  const key = '?key=' + _API_KEY;

  const queryStrings = [];

  // Create query string from all query options
  for (const query in queryOptions) {
    if (typeof queryOptions[query] === 'string') {
      // encode spaces for url if query option is string
      queryStrings.push(query + '=' + queryOptions[query].replace(' ', '+'));
    } else {
      queryStrings.push(query + '=' + queryOptions[query]);
    }
  }

  return _API_BASEURL + endPoint + key + '&' + queryStrings.join('&');
};

exports.fetch = function(endPoint, queryOptions) {
  const url = createUrl(endPoint, queryOptions);
  return axios.get(url)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return error;
    });
};
