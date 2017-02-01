import React from 'react';
import styles from '../BeerItem.css';

var BeerItem = (props) => (
  <div>
    <div className={styles.title}>
      {props.beer.name}
    </div>
    <img src={props.beer.image} className={styles.image} />
  </div>
);

export default BeerItem;