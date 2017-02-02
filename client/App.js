import React from 'react';
import styles from './App.css';
import BeerList from './components/BeerList.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let beersData = [
  {
    name: 'test1',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test1',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test1',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test1',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  },
  {
    name: 'test2',
    image: 'https://affotd.files.wordpress.com/2011/08/smiley-beer.jpg'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
