import React from 'react';
// import { Link } from 'react-router';
import BeerList from '../BeerList/BeerList';
import BeerCart from '../BeerCart/BeerCart';
import styles from './Brewery.css';
import axios from 'axios';

const cartSize = 4;

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(beer) {
    // https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important
    if (this.state.cart.length === cartSize) {
      return;
    }
    const newCart = this.state.cart.slice(0);
    newCart.push(beer);
    this.setState({
      cart: newCart
    });
  }

  componentDidMount() {
    this.fetchBeers();
  }

  fetchBeers() {
    const context = this;
    axios.get('/api/beers/' + this.props.params.brewery)
      .then(function (response) {
        context.handleSuccess(response);
      })
      .catch(function (error) {
        context.handleError(error);
      });
  }

  handleSuccess(beers) {
    this.setState({
      beers: beers
    });
  }

  handleError(error) {
    console.log(error);
  }

  render() {
    return (
      <div>
        <h2>{this.props.params.brewery}</h2>
        <div>
          <h1 className={styles.app}>Beer.ly</h1>
          {this.state.cart.length > 0 ? <BeerCart beers={this.state.cart} /> : null}
          <BeerList beers={this.state.beers} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default Beers;
