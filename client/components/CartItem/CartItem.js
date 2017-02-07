import React, { PropTypes } from 'react';
import styles from './CartItem.css';

const CartItem = (props) => {
  const handleRemove = () => (props.removeFromCart(props.index));

  return (
    <div className={styles.container}>
    	<div onClick={handleRemove}>
    		<img className={styles.xButtonImage} src="https://s3-us-west-1.amazonaws.com/beer.ly/beers/grey-x.svg" />
    	</div>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      <img src={props.beer.image} className={styles.image} />
    </div>
  );
};

CartItem.propTypes = {
  beer: PropTypes.object
};


export default CartItem;
