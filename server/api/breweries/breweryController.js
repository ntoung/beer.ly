'use strict';

const utils = require('../utils/helpers');

function fetchBreweriesByLocation(city) {
  const endPoint = 'locations/';
  const queryOptions = {
    // locality: 'San Francisco'
    locality: city,
    p: '1',
    isPrimary: 'Y',
    order: 'breweryName'
  };

  return utils.fetch(endPoint, queryOptions);
}

exports.get = (req, res) => {
  const city = req.params.location;
  fetchBreweriesByLocation(city)
    .then(function(response) {
      res.end(JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error);
    });
};
