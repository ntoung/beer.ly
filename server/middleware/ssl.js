const fs = require('fs');
const path = require('path');

// SSL Certificates for HTTPS
module.exports = {
  key: fs.readFileSync(path.join(__dirname, '../..', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../..', 'cert.pem')),
  passphrase: 'beerly'
}
