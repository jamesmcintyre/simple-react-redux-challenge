import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './ConnectedApp';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore(
  {
    toggle: {
      value: false
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
