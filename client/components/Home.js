import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Search';
import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <div>
          <h1 className={styles.title}>Beer.ly</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.searchField}>
            <MuiThemeProvider>
              <Search />
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
