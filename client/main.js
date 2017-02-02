import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Breweries from './components/Breweries.js';
import Beers from './components/Beers.js';
import Home from './components/Home';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:city" component={Breweries} />
      <Route path="/:city/:brewery" component={Beers} />
    </Route>
  </Router>
), document.getElementById('root'));
