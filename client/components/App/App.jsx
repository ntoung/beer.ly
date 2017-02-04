import React from 'react';
import styles from './App.css';
import NavBar from '../NavBar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <NavBar location={this.props.location} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired
};

export default App;
