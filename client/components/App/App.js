import React from 'react';
import styles from './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'foo',
      cart: []
    };
  }

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
