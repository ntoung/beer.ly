const express = require('express');

const app = express();

const api = require('./api/api');



// Middleware functions
require('./middleware/middleware')(app, express);

// Routing functions
app.use('./api', api);

app.use('/', function(req, res) { 
  res.sendFile('index.html');
});



module.exports = app;