import './polyfills';

declare let __karma__: any;
declare let require: any;

__karma__.loaded = function() {};

Promise.resolve(require.context('./', true, /\.spec\.ts/))
  .then((context: any) => {context.keys().map(context)})
  .then(__karma__.start, __karma__.error);