import React from 'react';
import BeerItem from './BeerItem.jsx';

var BeerList = (props) => (
  <div>
    {props.beers.map((beer) =>
      <BeerItem
        beer={beer}
      />
    )}
  </div>
);
export default BeerList;