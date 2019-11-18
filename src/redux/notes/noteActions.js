import shortid from 'shortid';
import * as noteTypes from './noteTypes';

export const add = text => {
  return {
    type: noteTypes.ADD_NOTE,
    payload: {
      note: {
        id: shortid.generate(),
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
