import React, { Component } from 'react';

const withLog = WrappedComponent => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLog;
