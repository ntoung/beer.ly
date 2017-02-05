import React from 'react';
import styles from './BeerItem.css';

const mockImages = [
  'https://files.slack.com/files-pri/T3A5SKW0Z-F3ZGZL26L/beer2.jpg',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F3ZHSEP41/beer3.jpg',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F40UP24CF/beer4.jpg',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F3ZHSHKJM/beer1.jpg',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F410A7Y8N/beer5.png',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F409QS66N/beer6.png',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F409QSLP4/beer7.png',
  'https://files.slack.com/files-pri/T3A5SKW0Z-F3ZK5QD33/beer8.jpg'
];

const BeerItem = (props) => {

  const handleClick = () => {
    var beer = {
      name: props.beer.name,
      image: mockImages[props.beer.style.id % mockImages.length]
    }
    props.addToCart(beer);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {props.beer.name}
      </div>
      {/*<img src={props.beer.labels ? props.beer.labels.large : 'http://placehold.it/350x350'} className={styles.image} /> */}
      <img src={mockImages[props.beer.style.id % mockImages.length]} className={styles.image} />

      <button className={styles.addButton} onClick={handleClick} >Add to Flight</button>

    </div>
  );
};


export default BeerItem;
