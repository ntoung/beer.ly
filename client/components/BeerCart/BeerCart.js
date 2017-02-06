import React from 'react';
import { Link } from 'react-router';

import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';

import styles from './BeerCart.css';

// import RaisedButton from '../../../material-ui/RaisedButton/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const cartSize = 4;

var BeerCart = (props) => {
  
  var cartItems =[];
  for (var i = 0; i < props.beers.length; i++) {
    var cartItem = <CartItem key={i} beer={props.beers[i]} index={i} removeFromCart={props.removeFromCart} />
    cartItems.push(cartItem);
  }

  var cartDetailsHandler = () => {
    return (cartItems.length) ? 
      (<h4>Your Cart has {cartItems.length} / 4 selections</h4>):(<h4>Your Cart is Empty!</h4>);
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        {cartDetailsHandler()}
        {props.beers.length === cartSize ?
          <MuiThemeProvider>
            {props.inCheckout ?
              null
              : <RaisedButton className={styles.button} primary onClick={props.checkout} label="Checkout" />
            }
          </MuiThemeProvider>
          : null
        }
      </div>
      <div className={styles.cartRow}>
      {cartItems}
      
      </div>
    </div>
  );
};

export default BeerCart;
