import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


  handleSubmit(event) {
    axios.post('auth/users/register/', this.state)
      .then((response) => {
        // Clear input fields
        this.setState({username: '', password: ''});
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="POST">
        <h3> Register </h3>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default Register;
