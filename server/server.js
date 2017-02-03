/* eslint no-console: 0 */
const express = require('express');
const https = require('https');
const mongoose = require('mongoose');
const app = express();

const ssl = require('./middleware/ssl.js');
const config = require('./config/config');
const api = require('./api/api');
const auth = require('./auth/auth');

// Connect to database
mongoose.connect(config.database.local);

// Middleware
require('./middleware/middleware')(app);

// API Routing
app.use('/api', api);

// Authentication
app.use('/auth', auth);

require('./middleware/webpack')(app, express);

https.createServer(ssl, app).listen(config.port);

console.info('==> 🍺  flowing on %ss. Open up https://localhost:%s/ in your browser.', config.port, config.port);
