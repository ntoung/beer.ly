import React from 'react';
import BreweryListItem from '../BreweryListItem/BreweryListItem';
import BreweryModal from '../BreweryModal/BreweryModal';
import styles from './BreweryList.css';

class BreweryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalBrewery: {}
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal(brewery) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      modalBrewery: brewery || {}
    });
  }

  render() {
    const breweries = this.props.breweries.map((brewery) => {
      // Only display breweries with images
      if (brewery.brewery.images !== undefined && brewery.brewery.images.squareMedium !== undefined) {
        return <BreweryListItem key={brewery.brewery.id} brewery={brewery} city={this.props.city} toggleModal={this.toggleModal} />;
      }
    });

    return (
      <div className={styles.grid}>
        {breweries}
        {
          <BreweryModal 
            isOpen={this.state.modalIsOpen}
            onCancel={this.toggleModal}
            brewery={this.state.modalBrewery}
            toggleModal={this.toggleModal}
          />
        }
      </div>
    );
  }
}

BreweryList.propTypes = {
  city: React.PropTypes.string.isRequired,
  breweries: React.PropTypes.array.isRequired
};

export default BreweryList;
