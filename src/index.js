import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './coponents/App';
import { BrowserRouter } from 'react-router-dom';


import {store} from './reudcers'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
