'use strict';

const utils = require('../utils/helpers');

function fetchBreweryByName(name) {
  const endPoint = 'breweries/';
  const queryOptions = {
    // name: 'Fort Point Brewing Company'
    name: name
  };

  return utils.fetch(endPoint, queryOptions);
}

function fetchBeersByBreweryId(breweryID) {
  const endPoint = `brewery/${breweryID}/beers/`;
  return utils.fetch(endPoint, {});
}

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
    });
};
