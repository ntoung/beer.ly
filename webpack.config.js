const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/index.ejs',
    inject: 'body' // inject all script files at the bottom of the body
  })]
}
