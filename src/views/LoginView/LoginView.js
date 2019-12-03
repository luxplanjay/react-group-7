import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

class LoginView extends Component {
  state = { email: '', password: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });

    // this.setStaet({ name: '', email: '', password: '' })
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(authOperations.loginUser(credentials)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginView);
