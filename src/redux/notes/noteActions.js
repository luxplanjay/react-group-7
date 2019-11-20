import shortid from 'shortid';
import * as noteTypes from './noteTypes';

export const add = text => {
  return {
    type: noteTypes.ADD_NOTE,
    payload: {
      note: {
        id: shortid.generate(),
        completed: false,
        text,
      },
    },
  };
};

export const remove = id => {
  return {
    type: noteTypes.REMOVE_NOTE,
    payload: {
      id,
    },
  };
};

export const changeFilter = filter => {
  return {
    type: noteTypes.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};
