import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Registration from './app/registration/Registration';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={Registration} />
  </BrowserRouter>,
  document.getElementById('root')
);
