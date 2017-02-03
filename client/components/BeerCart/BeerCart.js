import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './BeerCart.css';

const cartSize = 4;

var BeerCart = (props) => (
  <div className={styles.cartRow}>
  {
    props.beers.map((beer) =>
      <CartItem
        beer={beer}
      />
    )
  }
  {props.beers.length === cartSize ?
    <button className={styles.checkOutButton}>CheckOut</button>
    : null
  }
  </div>
);

export default BeerCart;
