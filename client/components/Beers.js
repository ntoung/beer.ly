import React from 'react';
// import { Link } from 'react-router';

class Beers extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.brewery}</h2>
      </div>
    );
  }
}

export default Beers;
