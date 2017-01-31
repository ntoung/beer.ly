import React from 'react';
import styles from './App.css';
import BeerList from './components/BeerList.jsx';

var beersData = [
  {
    name: 'test1',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://502brews.files.wordpress.com/2013/05/draft-beer-small.jpg'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <h1 className={styles.app}>Beer.ly</h1>
        <BeerList beers={beersData} />
      </div>
    );
  }
}
