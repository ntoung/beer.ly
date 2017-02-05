import React from 'react';
import styles from './CartItem.css';

var CartItem = (props) => {
	
	const handleRemove = () => (props.removeFromCart(props.index));
  //https://store.meteor.ie/assets/images/global/grey-x.svg
  //https://files.slack.com/files-pri/T3A5SKW0Z-F416V879S/screen_shot_2017-02-04_at_9.22.46_pm.png
  return (
    <div className={styles.container}>
    	<div onClick={handleRemove}>
    		<img className={styles.xButtonImage} src="https://store.meteor.ie/assets/images/global/grey-x.svg" />
    	</div> 
      <div className={styles.title}>
        {props.beer.name}
      </div>
      <img src={props.beer.image} className={styles.image} />
    </div>
  )
};


export default CartItem;
