'use strict'
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8008 : process.env.PORT;

// Build directory is where the bundle file will be placed
var BUILD_DIR = path.join(__dirname, '/../../dist/');

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()) // parse application/json
  app.use(morgan('dev'))

  if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/', function response(req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(BUILD_DIR, 'index.html')));
      res.end();
    });
  } else {
    app.use(express.static(BUILD_DIR));
    app.get('/', function response(req, res) {
      res.sendFile(path.join(BUILD_DIR, 'index.html'));
    });
  }
}
