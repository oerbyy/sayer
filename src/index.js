import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import {routes} from './routes';

ReactDOM.render(
  <BrowserRouter basename="/">
    <App routes={routes} />
  </BrowserRouter>,
  document.getElementById('root')
);
