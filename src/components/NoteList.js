import React from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/notes/noteActions';

const NoteList = ({ notes = [], onDeleteNote }) => (
  <ul>
    {notes.map(({ id, text }) => (
      <li key={id}>
        <span>{text}</span>
        <button onClick={() => onDeleteNote(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteNote: id => dispatch(noteActions.remove(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
