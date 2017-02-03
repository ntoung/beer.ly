import React from 'react';
import BeerItem from '../BeerItem/BeerItem';
import styles from './BeerList.css';

const rowSize = 3;

const BeerRow = (props) => (
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

BeerRow.propTypes = {
  beers: React.PropTypes.array,
  addToCart: React.PropTypes.func
};

const BeerList = (props) => {
  let beerRows = [];
  let curRow = [];

  for (let i = 0; i < props.beers.length; i++) {
    curRow.push(props.beers[i]);
    if (curRow.length === rowSize) {
      const beerRow = (
				<BeerRow
					key={i}
					beers={curRow}
					style={styles.beerRow}
					addToCart={props.addToCart}
				/>
			);
      beerRows.push(beerRow);
      curRow = [];
    }
  }

  return (
	  <div>
		  {beerRows}
	  </div>
  );
};

BeerList.propTypes = {
  beers: React.PropTypes.array,
  addToCart: React.PropTypes.func
};

export default BeerList;
