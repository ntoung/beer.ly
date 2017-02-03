import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.params.city,
      breweries: []
    };
  }

  componentDidMount() {
    this.fetchBreweries();
  }

  fetchBreweries() {
    if (this.state.city === '') {
      this.setState({ breweries: [] });
      return;
    }

    const context = this;
    axios.get('api/breweries/' + this.state.city)
      .then((response) => {
        const newBreweries = this.handleSuccess(response);
        context.setState({ breweries: newBreweries });
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleSuccess(response) {
    return response.data.map((brewery) => brewery);
  }

  handleError(error) {
    console.log(error);
  }

  render() {
    return (
      <div>
        <h1>Breweries in {this.props.params.city}</h1>
        <ul>
          {this.state.breweries.map(brewery => (
            <li key={brewery.id}><Link to={`/${this.state.city}/${brewery.brewery.name}`}>{brewery.brewery.name}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

City.propTypes = {
  params: React.PropTypes.object
};

export default City;
