import React from 'react';
import BeerItem from './BeerItem.jsx';
import styles from '../BeerList.css';

const rowSize = 3;

var BeerRow = (props) => (
	<div className={styles.beerRow}>
		{
			props.beers.map((beer) => 
				<BeerItem 
					beer={beer}
					className={styles.beerItem}
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
  		var beerRow = (<BeerRow beers={curRow} style={styles.beerRow}/>);
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
