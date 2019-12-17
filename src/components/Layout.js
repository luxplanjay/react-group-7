import React from 'react';
import Appbar from './Appbar';

const styles = {
  container: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 24px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Appbar />
    {children}
  </div>
);

export default Layout;
