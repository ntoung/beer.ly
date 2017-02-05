import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './BeerCart.css';
// import RaisedButton from '../../../material-ui/RaisedButton/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const cartSize = 4;

var BeerCart = (props) => {
  
  var cartItems =[];
  for (var i = 0; i < props.beers.length; i++) {
    var cartItem = <CartItem beer={props.beers[i]} index={i} removeFromCart={props.removeFromCart} />
    cartItems.push(cartItem);
  }
  
  return (
    <div className={styles.cartRow}>
    {cartItems}
    {props.beers.length === cartSize ?
      <MuiThemeProvider>
        <RaisedButton className={styles.button} label="Checkout" />
      </MuiThemeProvider>
      : null
    }
    </div>
  );
};

export default BeerCart;
