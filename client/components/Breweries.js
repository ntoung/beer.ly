import React from 'react';
import { Link } from 'react-router';

const breweries = [
  {
    id: 1,
    name: 'Lagunitas',
    city: 'San Francisco'
  },
  {
    id: 2,
    name: 'Dog Fish Head',
    city: 'San Francisco'
  },
  {
    id: 3,
    name: 'Avery',
    city: 'San Francisco'
  }
];

class Breweries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: breweries
    };
  }

  render() {
    return (
      <div>
        <h1>Breweries in {this.props.params.city}</h1>
        <ul>
          {this.state.breweries.map(brewery => (
            <li key={brewery.id}><Link to={`/${this.props.params.city}/${brewery.name}`}>{brewery.name}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Breweries;
