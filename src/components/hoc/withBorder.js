import React, { Component } from 'react';

const withBorder = WrappedComponent => {
  return class WithBorder extends Component {
    state = {
      borderColor: this.props.withBorderColor,
    };

    onEnter = () => {
      this.setState({
        borderColor: 'blue',
      });
    };

    onLeave = () => {
      this.setState({
        borderColor: this.props.withBorderColor,
      });
    };

    render() {
      const { borderColor } = this.state;

      return (
        <div
          className="with-border"
          style={{ borderColor }}
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withBorder;
