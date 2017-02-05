import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './components/Router/routes';

// helps register clicks and taps on different devices when using material-ui
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
