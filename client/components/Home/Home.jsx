import React from 'react';
import Search from '../Search/Search';
import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.searchField}>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
