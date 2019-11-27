import { combineReducers } from 'redux';
import notesReducer from './notes/notesReducer';

export default combineReducers({
  notes: notesReducer,
});
