const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

module.exports = function(app, express) {

  // parse application/x-www-form-urlencoded
  // for authentication
  app.use(bodyParser.urlencoded({ extended: true }));

  // automatically parses stringified data
  app.use(bodyParser.json());

  // request logger
  app.use(morgan('dev'));

  // serve bundled client files
  app.use(express.static(path.join(__dirname, '/../../', 'dist')));
}