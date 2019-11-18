import * as noteTypes from './noteTypes';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case noteTypes.ADD_NOTE:
      return [...state, action.payload.note];

    case noteTypes.REMOVE_NOTE:
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
};

export default noteReducer;
