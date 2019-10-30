import React from 'react';
import withTheme from './hoc/withTheme';

const ThemeSwitch = ({ theme }) => (
  <button type="button" onClick={theme.toggleTheme}>
    Toggle theme
  </button>
);

export default withTheme(ThemeSwitch);
