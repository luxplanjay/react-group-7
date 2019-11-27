import * as notesActions from './noteActions';
import notesApiService from '../../services/notes-api';

const fetchNotes = () => dispatch => {
  dispatch(notesActions.fetchNotesStart());

  notesApiService
    .fetchNotes()
    .then(notes => dispatch(notesActions.fetchNotesSuccess(notes)))
    .catch(error => dispatch(notesActions.fetchNotesFailure(error)));
};

const saveNote = text => dispatch => {
  const note = { text, completed: false };

  dispatch(notesActions.addNoteStart());

  notesApiService
    .saveNote(note)
    .then(savedNote => dispatch(notesActions.addNoteSuccess(savedNote)))
    .catch(error => dispatch(notesActions.addNoteFailure(error)));
};

const deleteNote = id => dispatch => {
  dispatch(notesActions.deleteNoteStart());

  notesApiService
    .deleteNote(id)
    .then(() => dispatch(notesActions.deleteNoteSuccess(id)))
    .catch(error => dispatch(notesActions.deleteNoteFailure(error)));
};

// const deleteNoteasync = id => async dispatch => {
//   dispatch(notesActions.deleteNoteStart());

//   try {
//     const x = await notesApiService.deleteNote(id);

//     dispatch(notesActions.deleteNoteSuccess(id));
//   } catch (error) {
//     dispatch(notesActions.deleteNoteFailure(error));
//   }
// };

export default { saveNote, deleteNote, fetchNotes };
