'use strict';

const utils = require('../utils/helpers');
const config = require('../../config/apiKeys.js');

exports.get = (req, res) => {
  // Google Maps endpoint
  const api = {
    key: config.googleMapsAPIKey,
    url: 'https://maps.googleapis.com/maps/api/',
    endPoint: 'place/autocomplete/json'
  };

  // endpoint query options
  const queryOptions = {
    input: req.params.locationPartial,
    types: '(cities)'
  };

  utils.fetch(api, queryOptions)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((error) => {
      console.log(error);
    });
};
