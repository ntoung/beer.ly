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
        key={i}
        className={styles.row}
        beers={curRow}
        style={styles.beerRow}
        addToCart={props.addToCart}
      />);
  		beerRows.push(beerRow);
  		curRow = [];
  	}
  }
  return (
	  <div className={styles.wrapper}>
	  	{beerRows}
	  </div>
	)
};

export default BeerList;
