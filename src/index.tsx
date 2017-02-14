/// <reference path="./typings.d.ts"/>
import './polyfills';

import { createElement } from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { store } from './store'; 
import { Provider } from 'react-redux';

import { App } from './components/App/App';

declare let module: any;

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
   </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => render(
    <Provider store={store}> 
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  ))
};
