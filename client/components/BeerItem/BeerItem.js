import React from 'react';
import styles from './BeerItem.css';

const mockImages = [
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer1.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer2.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer3.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer4.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer5.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer6.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer7.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer8.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer9.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer10.png'
];

const BeerItem = (props) => {

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); //don't go to BeerItemModal when add to flight is clicked
    const beer = {
      name: props.beer.name,
      image: mockImages[props.beer.style.id % mockImages.length]
    }
    props.addToCart(beer);

  };

  const handleModal = () => {
    const beer = {
      name: props.beer.name,
      image: mockImages[props.beer.style.id % mockImages.length]
    }
    props.toggleModal(beer);
  }

   // Handles situation when brewery does not supply information
  var abvHandler = () => {
    return (props.beer.abv) ?
      (<strong className={styles.abv}>{props.beer.abv}% ALC/VOL</strong>) :
      (<strong className={styles.abv}>7.25% ALC/VOL</strong>);
  }

  var descriptionHandler = () => {
    return (props.beer.description) ?
      (<p className={styles.description}>{props.beer.description.substring(0, 60)}...</p>) :
      (<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...</p>) ;
  }

  return (
    <div className={styles.cell} onClick={handleModal}>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      {/*<img src={props.beer.labels ? props.beer.labels.large : 'http://placehold.it/350x350'} className={styles.image} /> */}
      <img src={mockImages[props.beer.style.id % mockImages.length]} className={styles.image} />

      { /* Optional information handlers */ }
      { abvHandler() } { descriptionHandler() }
      <button className={styles.addButton} onClick={handleAddToCartClick} >Add to Flight</button>
    </div>
  );
};


export default BeerItem;
