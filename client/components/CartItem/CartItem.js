import React from 'react';
import styles from './CartItem.css';

var CartItem = (props) => {

  return (
    <div>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      <img src={props.beer.image} className={styles.image} />
    </div>
  )
};


export default CartItem;
