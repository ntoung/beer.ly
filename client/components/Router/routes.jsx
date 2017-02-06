import React from 'react';
import App from '../App/App';
import Home from '../Home/Home';
import City from '../City/City';
import Brewery from '../Brewery/Brewery';
import Checkout from '../Checkout/Checkout';

import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/:city" component={City} />
    <Route path="/:city/:brewery" component={Brewery} />
  </Route>
);
