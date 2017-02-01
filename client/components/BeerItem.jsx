import React from 'react';

var BeerItem = (props) => (
  <div>
    <div className="beer-item-title">
      {props.beer.name}
    </div>
    <img src={props.beer.image} className="beer-item-image" />
  </div>
);

export default BeerItem