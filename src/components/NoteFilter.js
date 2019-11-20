import React from 'react';
import { connect } from 'react-redux';
import notesSelectors from '../redux/notes/notesSelectors';
import * as noteActions from '../redux/notes/noteActions';

const NoteFilter = ({ value, onChangeFilter }) => (
  <label>
    Filter notes
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

const mapStateToProps = state => {
  return {
    value: notesSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: value => dispatch(noteActions.changeFilter(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
