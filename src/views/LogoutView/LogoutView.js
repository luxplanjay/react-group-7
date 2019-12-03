import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

class LogoutView extends Component {
  state = {};

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogoutView);
