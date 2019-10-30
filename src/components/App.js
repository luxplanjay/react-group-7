import React, { Component, createContext } from 'react';
import Toolbar from './Toolbar';
import ThemeSwitch from './ThemeSwitch';
import ThemeContext from '../context/theme-context';

class App extends Component {
  render() {
    return (
      <ThemeContext>
        <div className="App">
          <ThemeSwitch />
          <Toolbar />
        </div>
      </ThemeContext>
    );
  }
}

export default App;
