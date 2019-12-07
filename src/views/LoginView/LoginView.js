import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import authOperations from '../../redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

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

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
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

// const mapDispatchToProps = dispatch => ({
//   onLogin: credentials => dispatch(authOperations.loginUser(credentials)),
// });

const mapDispatchToProps = {
  onLogin: authOperations.loginUser,
};

export default compose(
  withAuthRedirect,
  connect(
    null,
    mapDispatchToProps,
  ),
)(LoginView);
