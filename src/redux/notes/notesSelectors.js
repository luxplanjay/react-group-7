import { createSelector } from 'reselect';

const getNotes = state => state.notes.items;

const getFilter = state => state.notes.filter;

const getFilteredNotes = createSelector(
  [getNotes, getFilter],
  (notes, filter) => {
    return notes.filter(note =>
      note.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// TODO: мем
const getNoteById = (state, id) => {
  const notes = getNotes(state);

  return notes.find(note => note.id === id);
};

export default {
  getNotes,
  getFilter,
  getFilteredNotes,
  getNoteById,
};
