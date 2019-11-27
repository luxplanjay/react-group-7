import React from 'react';
import { connect } from 'react-redux';
import notesOperations from '../../redux/notes/noteOperations';
import notesSelectors from '../../redux/notes/notesSelectors';

const NoteListItem = ({ text, onDelete }) => (
  <li>
    <span>{text}</span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const note = notesSelectors.getNoteById(state, ownProps.id);

  return {
    ...note,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(notesOperations.deleteNote(ownProps.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListItem);
