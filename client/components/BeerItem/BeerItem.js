import React from 'react';
import styles from './BeerItem.css';

const BeerItem = (props) => {
  const handleClick = () => {
    props.addToCart(props.beer)
  };

  return (
    <div>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      <img src={props.beer.labels ? props.beer.labels.large : 'http://placehold.it/350x350'} className={styles.image} />
      {props.isBeingRenderedInCart ?
        null
        : <button className={styles.addButton} onClick={handleClick} >Add to Flight</button>
      }
    </div>
  );
};


export default BeerItem;
