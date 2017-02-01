import React from 'react';
import BeerItem from './BeerItem.jsx';
import styles from '../BeerCart.css';

var BeerCart = (props) => (
  <div>
  {
    props.beers.map((beer) =>
      <BeerItem
        beer={beer}
        className={styles.beerItem}
        isBeingRenderedInCart={true}
      />
    )
  }
  </div>
);

export default BeerCart;