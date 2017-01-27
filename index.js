const server = require('./server/server.js');

const port = process.env.port || 8008;

server.listen(port, function() {
  console.log('Beer flowing on ' + port);
});
