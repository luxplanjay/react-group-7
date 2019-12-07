import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

const withAuthRedirect = Component => {
  function WithAuthRedirect({ isAuthenticated, ...restProps }) {
    return isAuthenticated ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
