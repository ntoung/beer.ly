import React from 'react';
import BeerItem from './BeerItem.jsx';
import styles from '../BeerCart.css';

const cartSize = 4;

var BeerCart = (props) => (
  <div className={styles.cartRow}>
  {
    props.beers.map((beer) =>
      <BeerItem
        beer={beer}
        className={styles.beerItem}
        isBeingRenderedInCart={true}
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