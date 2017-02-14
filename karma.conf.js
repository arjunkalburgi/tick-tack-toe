const webpack = require('webpack');
const build = require('./webpack/webpack.config.prod');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: [
      'mocha',
      'chai',
      'sinon',
    ],
    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],
    basePath: '',
    files: [
      'src/test.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    webpack: {
      resolve: build.resolve,
      module: build.module
    },
    webpackServer: {
      noInfo: true
    },
    mochaReporter: {
      output: 'autowatch',
      maxLogLines: 5
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};
