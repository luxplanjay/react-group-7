import React from 'react';
import { NavLink } from 'react-router-dom';

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

const Navigation = () => (
  <nav>
    <NavLink to="/counter" style={styles.link} activeStyle={styles.activeLink}>
      Counter
    </NavLink>

    <NavLink to="/signup" style={styles.link} activeStyle={styles.activeLink}>
      Sign up
    </NavLink>

    <NavLink to="/clock" style={styles.link} activeStyle={styles.activeLink}>
      Clock
    </NavLink>

    <NavLink to="/news" style={styles.link} activeStyle={styles.activeLink}>
      News
    </NavLink>

    <NavLink to="/context" style={styles.link} activeStyle={styles.activeLink}>
      Context
    </NavLink>

    <NavLink to="/todos" style={styles.link} activeStyle={styles.activeLink}>
      Todos
    </NavLink>
  </nav>
);

export default Navigation;
