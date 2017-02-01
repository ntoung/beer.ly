import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Breweries from './components/Breweries.js';
import Beers from './components/Beers.js';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/:city" component={Breweries} />
      <Route path="/:city/:brewery" component={Beers} />
  </Router>
), document.getElementById('root'));
