import { combineReducers } from 'redux';
import timerReducer from './timer/timerReducer';
import noteReducer from './notes/noteReducer';

export default combineReducers({
  value: timerReducer,
  notes: noteReducer,
});
