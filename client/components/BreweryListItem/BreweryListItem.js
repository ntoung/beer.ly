import React from 'react';
import { Link } from 'react-router';
import styles from './BreweryListItem.css';

class BreweryList extends React.Component {
  render() {
    return (
      <Link className={styles.cell} to={`/${this.props.city}/${this.props.brewery.brewery.name}`}>
        <h2 className={styles.title}>{this.props.brewery.brewery.name}</h2>
      </Link>
    );
  }
}

BreweryList.propTypes = {
  city: React.PropTypes.string.isRequired,
  brewery: React.PropTypes.object.isRequired
};

export default BreweryList;
