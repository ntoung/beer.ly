/* eslint no-console: 0 */
const express = require('express');
const https = require('https');
const app = express();

const ssl = require('./middleware/ssl.js');
const config = require('./config/config');
const api = require('./api/api');

require('./middleware/middleware')(app);

app.use('/api', api);

require('./middleware/webpack')(app, express);

https.createServer(ssl, app).listen(config.port);

console.info('==> 🍺  flowing on %ss. Open up https://localhost:%s/ in your browser.', config.port, config.port);
