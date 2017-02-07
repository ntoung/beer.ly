import React, { PropTypes } from 'react';
import BeerItem from '../BeerItem/BeerItem';
import styles from './BeerList.css';

const BeerList = (props) => {
  const beers = props.beers.map((beer) => {
    return <BeerItem key={beer.id} beer={beer} className={styles.beerItem} isBeingRenderedInCart={false} addToCart={props.addToCart} />;
  });

  return (
	  <div className={styles.grid}>
			{beers}
	  </div>
	);
};

BeerList.propTypes = {
  beers: PropTypes.array,
  addToCart: PropTypes.func
};


export default BeerList;
