import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/lightbox2/dist/css/lightbox.min.css';
import '../node_modules/lightbox2/dist/js/lightbox.min.js';

ReactGA.initialize('UA-122808286-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
