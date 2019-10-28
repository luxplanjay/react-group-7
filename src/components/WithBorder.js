import React, { Component } from 'react';

export default class WithBorder extends Component {
  state = {
    borderColor: this.props.color,
  };

  onEnter = () => {
    this.setState({
      borderColor: 'blue',
    });
  };

  onLeave = () => {
    this.setState({
      borderColor: this.props.color,
    });
  };

  render() {
    const { borderColor } = this.state;

    return (
      <div
        className="with-border"
        style={{
          borderColor,
        }}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        {this.props.children}
      </div>
    );
  }
}
