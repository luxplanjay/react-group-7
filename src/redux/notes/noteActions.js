import * as noteTypes from './noteTypes';

export const addNoteStart = () => {
  return {
    type: noteTypes.ADD_NOTE_START,
  };
};

export const addNoteSuccess = note => {
  return {
    type: noteTypes.ADD_NOTE_SUCCESS,
    payload: {
      note,
    },
  };
};

export const addNoteFailure = error => {
  return {
    type: noteTypes.ADD_NOTE_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteNoteStart = () => {
  return {
    type: noteTypes.DELETE_NOTE_START,
  };
};

export const deleteNoteSuccess = id => {
  return {
    type: noteTypes.DELETE_NOTE_SUCCESS,
    payload: {
      id,
    },
  };
};

export const deleteNoteFailure = error => {
  return {
    type: noteTypes.DELETE_NOTE_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchNotesStart = () => {
  return {
    type: noteTypes.FETCH_NOTES_START,
  };
};

export const fetchNotesSuccess = notes => {
  return {
    type: noteTypes.FETCH_NOTES_SUCCESS,
    payload: {
      notes,
    },
  };
};

export const fetchNotesFailure = error => {
  return {
    type: noteTypes.FETCH_NOTES_FAILURE,
    payload: {
      error,
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
