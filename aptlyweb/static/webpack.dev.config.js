var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: 'dist',
  path: path.resolve(__dirname, 'dist')
};

module.exports = config;
