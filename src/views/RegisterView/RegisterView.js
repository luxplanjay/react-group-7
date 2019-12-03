import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

class RegisterView extends Component {
  state = { name: '', email: '', password: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    // this.setStaet({ name: '', email: '', password: '' })
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerUser(credentials)),
});

export default connect(
  null,
  mapDispatchToProps,
)(RegisterView);
