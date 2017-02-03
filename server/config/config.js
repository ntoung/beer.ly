const config = {
  dev: 'development',
  prod: 'production',
  port: process.env.PORT || 8008,
  database: {
    local: 'mongodb://localhost/beerly',
    firebase: '' // if you want to use firebase
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

module.exports = config;
