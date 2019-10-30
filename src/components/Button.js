import React from 'react';
import withTheme from './hoc/withTheme';

const themeStyles = {
  light: {
    backgroundColor: '#fff',
    color: '#212121',
  },
  dark: {
    backgroundColor: '#212121',
    color: '#fff',
  },
};

const Button = ({ label, theme }) => (
  <button type="button" style={themeStyles[theme.mode]}>
    {label}
  </button>
);

export default withTheme(Button);
