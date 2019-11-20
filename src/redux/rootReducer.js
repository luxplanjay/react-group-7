import { combineReducers } from 'redux';
import timerReducer from './timer/timerReducer';
import notesReducer from './notes/notesReducer';

export default combineReducers({
  timerValue: timerReducer,
  notes: notesReducer,
});
