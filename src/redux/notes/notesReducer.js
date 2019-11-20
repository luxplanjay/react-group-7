import { combineReducers } from 'redux';
import * as noteTypes from './noteTypes';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case noteTypes.ADD_NOTE:
      return [...state, payload.note];

    case noteTypes.REMOVE_NOTE:
      return state.filter(note => note.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case noteTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
