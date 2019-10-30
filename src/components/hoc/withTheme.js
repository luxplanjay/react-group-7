import React from 'react';
import ThemeContext from '../../context/theme-context';

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
