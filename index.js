// External Libraries
const https = require('https'); // required for StripeJS

// Internal Libraries
const server = require('./server/server.js');
const ssl = require('./server/middleware/ssl.js');

const port = process.env.port || 8008;



// Create HTTPS server
https.createServer(ssl, server).listen(port, function(){
  console.log('Beer flowing on ' + port);
});


// Simple HTTP server
// server.listen(port, function() {
//   console.log('Beer flowing on ' + port);
// });
