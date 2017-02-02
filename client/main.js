import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Home from './components/Home/Home';
import City from './components/City/City';
import Brewery from './components/Brewery/Brewery';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:city" component={City} />
      <Route path="/:city/:brewery" component={Brewery} />
    </Route>
  </Router>
), document.getElementById('root'));
