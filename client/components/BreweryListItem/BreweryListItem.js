import React from 'react';
import { Link } from 'react-router';
import styles from './BreweryListItem.css';
// import InfoButton from 'material-ui/IconButton';

class BreweryList extends React.Component {
  constructor(props) {
    super(props);

    const breweryInfo = this.props.brewery.brewery;

    this.squareImage = (breweryInfo.images) ? breweryInfo.images.squareMedium : '';
    this.website = breweryInfo.website;
    this.description = breweryInfo.description;
    this.phoneNumber = this.props.brewery.phone || '(650) 269 - 2188'; // Default number
    this.cleanedPhoneNumber = this.phoneNumber.replace(/["'() -]/g, '');
  }

  // <Link href={"tel:" + this.cleanedPhoneNumber }>
  //   <p className={styles.details}>{this.phoneNumber}</p>
  // </Link>
          // <Link href={this.website}>
          //   <p className={styles.details}>{this.website}</p>
          // </Link>

  render() {
    return (
      <div className={styles.cell} >
        <Link className={styles.moreInfo} to="/modal">
          <i className="material-icons">info_outline</i>
        </Link>
        <Link to={`/${this.props.city}/${this.props.brewery.brewery.name}`}>
            <img className={styles.cover} src={this.squareImage} />
        </Link>
        <div className={styles.info}>
          <h3 className={styles.title}>{this.props.brewery.brewery.name}</h3>
        </div>
      </div>
    );
  }
}

BreweryList.propTypes = {
  city: React.PropTypes.string.isRequired,
  brewery: React.PropTypes.object.isRequired
};

export default BreweryList;
