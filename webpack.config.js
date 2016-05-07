var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var port = process.env.PORT || 8080;
var webpackPort = process.env.WEBPACK_PORT || 8090;

var config = {
  devServer: {
    contentBase: '/build'
  },
  port: port,
  webpackPort: webpackPort,
  devtool: 'sourcemap',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build'
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve : {
    extensions : ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/, // A regexp to test the require path. accepts either js
      loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;
