'use strict';

const axios = require('axios');

// const Post = require('./postModel')
const _API_KEY = require('../../config/apiKeys.js').breweryDBKey;
const _API_BASEURL = 'http://api.brewerydb.com/v2/';

exports.get = (req, res, next) => {
  const name = req.params.brewery;

  fetchBreweryByName(name)
    .then(function(response) {
      const breweryID = response.data[0].id;
      return fetchBeersByBreweryId(breweryID);
    })
    .then(function(response) {
      res.end(JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error);
    })
}

function fetchBreweryByName(name) {
  var endPoint = 'breweries/';
  var queryOptions = {
    // name: 'Fort Point Brewing Company'
    name: name
  };

  return fetch(endPoint, queryOptions);
}

function fetchBeersByBreweryId(breweryID) {
  var endPoint = `brewery/${breweryID}/beers/`;
  return fetch(endPoint, {});
}


function fetch(endPoint, queryOptions) {
  var url = createUrl(endPoint, queryOptions);
  return axios.get(url)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });
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
