import React from 'react';

const withHOC = WrappedComponent => {
  return function WithHOC(props) {
    console.log('with HOC!!!!');
    return (
      <div>
        <h1>WITH HOC!!!</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withHOC;
