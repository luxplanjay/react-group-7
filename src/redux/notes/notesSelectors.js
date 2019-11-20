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

export default { getNotes, getFilter, getFilteredNotes };

// 1) - перебирающие методы возаращют массив
// 2) - массив это ссылочный тип данных
// 3) [1,2,3] === [1,2,3] -> false

// 1
// timerValue = 0
// items = [batman, superman, green lantern]
// filter = man
//  getFilteredNotes(state) -> [batman, superman]

// Когда изменяется redux state вызываются все mapStateToProps
// timerValue = 5
// NoteList -> mapStateToProps
// getFilteredNotes(state) -> [batman, superman]
// [batman, superman] === [batman, superman] -> false
// NoteFilter -> re-render
