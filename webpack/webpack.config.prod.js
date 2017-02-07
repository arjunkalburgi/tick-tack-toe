const common = require('./common');
const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: common.entry,
  output: common.output,
  resolve: common.resolve,
  context: common.context,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'awesome-typescript-loader'
      ],
      exclude: /node_modules/
    }, 
      ...common.module.rules
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, "..")
    }),
    ...common.plugins
  ]
};