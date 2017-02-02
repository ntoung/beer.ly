import React from 'react';
import styles from '../BeerItem.css';

var BeerItem = (props) => {

  var handleClick = () => {
    props.addToCart(props.beer)
  }

  return (
    <div>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      <img src={props.beer.image} className={styles.image} />
      {props.isBeingRenderedInCart ?
        null
        : <button className={styles.addButton} onClick={handleClick} >Add to Flight</button>
      }
    </div>
  )
};


export default BeerItem;