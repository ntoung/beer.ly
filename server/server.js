const express = require('express');
const path = require('path');
const app = express();

const api = require('./api/api');



// Middleware functions
require('./middleware/middleware')(app, express);

// Routing functions
app.use('./api', api);

app.use('/', function(req, res) { 
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



module.exports = app;
