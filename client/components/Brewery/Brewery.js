import React from 'react';
import axios from 'axios';

import BeerList from '../BeerList/BeerList';
import BeerCart from '../BeerCart/BeerCart';
import Checkout from '../Checkout/Checkout';
import BeerItemModal from '../BeerItemModal/BeerItemModal';
import styles from './Brewery.css';

const cartSize = 4;

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      cart: [],
      inCheckout: false,
      modalIsOpen: false,
      modalBeer: {}
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkout = this.checkout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.fetchBeers();
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

  removeFromCart(indexToRemove) {
    var newCart = this.state.cart.slice(0);
    newCart.splice(indexToRemove, 1);
    if (this.state.inCheckout) {
      window.history.back();
    }
    this.setState({
      cart: newCart,
      inCheckout: false
    });
  }

  checkout() {
    window.history.pushState('not sure what this arg is', 'Title-In-Browser-History', '/checkout');
    this.setState({inCheckout: true});
  }

  fetchBeers() {
    const context = this;
    axios.get('/api/beers/' + this.props.params.brewery)
      .then(function(response) {
        context.handleSuccess(response.data);
      })
      .catch(function(error) {
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

  toggleModal(beer) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      modalBeer: beer || {}
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.params.brewery}</h2>
        <div>
          {this.state.cart.length > 0 ? <BeerCart beers={this.state.cart} removeFromCart={this.removeFromCart} inCheckout={this.state.inCheckout} checkout={this.checkout} /> : null}
          {this.state.inCheckout ?
            <Checkout />
            : <div>
                <BeerList beers={this.state.beers} addToCart={this.addToCart} toggleModal={this.toggleModal} />
                <BeerItemModal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} beer={this.state.modalBeer} toggleModal={this.toggleModal} />
              </div>
          }
        </div>
      </div>
    );
  }
}

Beers.propTypes = {
  params: React.PropTypes.object
};

export default Beers;
