/* eslint no-console: 0 */
const https = require('https');
const ssl = require('./middleware/ssl.js');
const express = require('express');
const app = express();
const api = require('./api/api');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8008 : process.env.PORT;

require('./middleware/middleware')(app, express);

app.use('/api', api);

https.createServer(ssl, app).listen(port);

console.info('==> 🍺 flowing on %ss. Open up https://localhost:%s/ in your browser.', port, port);
