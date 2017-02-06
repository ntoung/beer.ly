import React from 'react';

import BeerItem from '../BeerItem/BeerItem';
import styles from './BeerList.css';

const rowSize = 3;

var BeerRow = (props) => (
	<div className={styles.beerRow}>
		{
			props.beers.map((beer) =>
				<BeerItem
					key={beer.id}
          beer={beer}
					className={styles.beerItem}
          isBeingRenderedInCart={false}
          addToCart={props.addToCart}
          toggleModal={props.toggleModal}
				/>
			)
		}
	</div>
);

var BeerList = (props) => {
  var beerRows = [];
  var curRow = [];
  for (var i = 0; i < props.beers.length; i++) {
  	curRow.push(props.beers[i]);
  	if (curRow.length === rowSize) {
  		var beerRow = (<BeerRow
        className={styles.row}
        beers={curRow}
        style={styles.beerRow}
        addToCart={props.addToCart}
        toggleModal={props.toggleModal}
      />);
  		beerRows.push(beerRow);
  		curRow = [];
  	}
  }
  return (
	  <div>
	  	{beerRows}
	  </div>
	)
};

export default BeerList;
