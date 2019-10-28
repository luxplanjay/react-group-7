import React, { Component } from 'react';

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      on: false,
    };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.on ? 'Hide' : 'Show'}
          </button>
          {this.state.on && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};

export default withToggle;
