import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configStore from './store';
import { Provider } from 'react-redux';

const store = configStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,document.getElementById('application'));
