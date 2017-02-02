import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { browserHistory } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import styles from './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      input: ''
    };

    this.autoComplete = _.debounce(this.fetchCities, 300);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.fetchCities = this.fetchCities.bind(this);
  }

  onUpdateInput(inputValue) {
    this.setState({ input: inputValue });
    this.autoComplete();
  }

  onSelection(cityName, index) {
    console.log(cityName);
    console.log(index);
    browserHistory.push('/' + cityName);
    // TODO: handle selection by transferring to new page.
  }

  fetchCities() {
    if (this.state.input === '') {
      this.setState({ dataSource: [] });
      return;
    }

    const context = this;
    axios.get('api/locations/' + this.state.input)
      .then((response) => {
        const cities = this.handleSuccess(response);
        context.setState({ dataSource: cities });
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleSuccess(response) {
    return response.data.predictions.map((city) => {
      return city.structured_formatting.main_text;
    });
  }

  handleError(error) {
    console.log(error);
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <AutoComplete
          hintText="Search by city"
          floatingLabelText="City"
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdateInput}
          onNewRequest={this.onSelection}
          filter={(searchText, key) => true}
          fullWidth={true}
          animated={true}
        />
      </div>
    );
  }
}
