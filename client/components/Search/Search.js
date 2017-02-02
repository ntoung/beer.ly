import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { browserHistory } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import styles from './Search.css';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      input: ''
    };

    this.autoComplete = _.debounce(this.fetchCities, 300);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.fetchCities = this.fetchCities.bind(this);
  }

  componentWillUnmount() {
    source.cancel();
  }

  handleChange(inputValue) {
    this.setState({ input: inputValue });
    this.autoComplete();
  }

  handleSelection(cityName) {
    browserHistory.push('/' + cityName);
  }

  fetchCities() {
    if (this.state.input === '') {
      this.setState({ dataSource: [] });
      return;
    }

    const context = this;
    axios.get('api/locations/' + this.state.input, {cancelToken: source.token})
      .then((response) => {
        const cities = this.handleSuccess(response);
        context.setState({ dataSource: cities });
      })
      .catch((thrown) => {
        if (!axios.isCancel(thrown)) {
          context.handleError(thrown);
        }
      });
  }

  handleSuccess(response) {
    return response.data.predictions.map((city) => {
      return city.structured_formatting.main_text;
    });
  }

  handleError(error) {
    console.log('Error: ', error);
  }

  render() {
    const inlineStyles = {
      inputStyle: {
        color: '#FFF',
      },
      underlineStyle: {
        borderColor: '#FFF',
      },
      floatingLabelStyle: {
        color: '#FFF',
        'fontSize': '18px',
      },
      floatingLabelFocusStyle: {
        color: '#FFF',
      },
    };

    return (
      <div className={styles.searchBar}>
        <AutoComplete
          floatingLabelText="Choose a city"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleChange}
          onNewRequest={this.handleSelection}
          filter={(searchText, key) => true}
          fullWidth={true}
          animated={true}
          inputStyle={inlineStyles.inputStyle}
          underlineFocusStyle={inlineStyles.underlineStyle}
          floatingLabelStyle={inlineStyles.floatingLabelStyle}
        />
      </div>
    );
  }
}
