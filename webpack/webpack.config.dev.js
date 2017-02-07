const common = require('./common');
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    ...common.entry
  ],
  output: {
    path: common.output.path,
    publicPath: common.output.publicPath,
    filename: '[name].[hash].js'
  },
  resolve: common.resolve,
  context: common.context,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '..', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'react-hot-loader/webpack',
        'awesome-typescript-loader'
      ],
      exclude: /node_modules/
    }, 
      ...common.module.rules
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...common.plugins
  ]
};