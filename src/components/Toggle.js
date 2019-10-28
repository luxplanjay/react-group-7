import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => this.setState(prevState => ({ on: !prevState.on }));

  render() {
    return this.props.children(this.state.on, this.toggle);
  }
}
