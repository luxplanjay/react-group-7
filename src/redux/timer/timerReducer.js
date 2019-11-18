import * as timerTypes from './timerTypes';

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case timerTypes.INCREMENT_TIMER:
      return state + action.payload.value;

    case timerTypes.DECREMENT_TIMER:
      return state - action.payload.value;

    default:
      return state;
  }
};

export default timerReducer;
