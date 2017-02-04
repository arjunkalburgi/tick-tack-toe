import './polyfills';

import { createElement } from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { App } from './components/App/App'

declare let module: any;

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  ))
}