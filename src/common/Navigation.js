import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import authSelectors from '../redux/auth/authSelectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#F21D41',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      exact
      to={routes.HOME.path}
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={routes.TASKS.path}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Tasks
      </NavLink>
    )}
    {!isAuthenticated && (
      <>
        <NavLink
          to={routes.REGISTER.path}
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          to={routes.LOGIN.path}
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Login
        </NavLink>
      </>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
