import React from 'react';
import styles from './App.css';
import BeerList from './components/BeerList.jsx';
import BeerCart from './components/BeerCart.jsx';

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

const cartSize = 4;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'foo',
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(beer) {
    //https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important
    if (this.state.cart.length === 4) {
      return;
    }
    var newCart = this.state.cart.slice(0);
    newCart.push(beer);
    this.setState({
      cart: newCart
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.app}>Beer.ly</h1>
        {this.state.cart.length > 0 ?
          <BeerCart beers={this.state.cart} />
          : null
        }
        <BeerList beers={beersData} addToCart={this.addToCart} />
      </div>
    );
  }
}
