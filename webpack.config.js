var path = require('path');
var webpack = require('webpack');

// webpack.config.js
module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: [/\.js$/,/\.jsx$/],
      exclude: ['/node_modules/']
    }]
  },
  plugins: []
};