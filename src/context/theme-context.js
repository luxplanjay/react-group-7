import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  // construcor() {
  //   super();

  //   this.toggleTheme = () => {
  //     this.setState(state => ({
  //       mode: state.mode === 'light' ? 'dark' : 'light',
  //     }));
  //   };

  //   this.state = {
  //     mode: 'light',
  //     toggleTheme: this.toggleTheme,
  //   };
  // }

  toggleTheme = () => {
    this.setState(state => ({
      mode: state.mode === 'light' ? 'dark' : 'light',
    }));
  };

  state = {
    mode: 'light',
    toggleTheme: this.toggleTheme,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
