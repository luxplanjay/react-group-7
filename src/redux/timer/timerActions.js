import * as types from './timerTypes';

export const increment = value => {
  return {
    type: types.INCREMENT_TIMER,
    payload: {
      value,
    },
  };
};

export const decrement = value => {
  return {
    type: types.DECREMENT_TIMER,
    payload: {
      value,
    },
  };
};
