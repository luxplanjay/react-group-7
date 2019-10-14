/* eslint-disable */
import React from 'react';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Increment by {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by {step}
    </button>
  </div>
);

export default Controls;
