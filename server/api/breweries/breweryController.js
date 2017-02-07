'use strict';

const utils = require('../utils/helpers');
const config = require('../../config/apiKeys.js');

function fetchBreweriesByLocation(city) {
  const api = {
    key: config.breweryDBKey,
    url: 'http://api.brewerydb.com/v2/',
    endPoint: 'locations/'
  };

  const queryOptions = {
    // locality: 'San Francisco'
    locality: city,
    p: '1',
    isPrimary: 'Y',
    order: 'breweryName'
  };

  return utils.fetch(api, queryOptions);
}

exports.get = (req, res) => {
  const city = req.params.location;
  fetchBreweriesByLocation(city)
    .then((response) => {
      res.end(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
