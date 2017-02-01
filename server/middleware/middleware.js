'use strict';

const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true })); // https://github.com/expressjs/body-parser
  app.use(bodyParser.json()); // https://github.com/expressjs/body-parser
  app.use(morgan('dev')); // https://github.com/expressjs/morgan
};
