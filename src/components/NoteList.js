import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/notes/noteActions';
import notesSelectors from '../redux/notes/notesSelectors';

class NoteList extends Component {
  render() {
    console.log('NoteList re-render!!!' + Date.now());

    const { notes = [], onDeleteNote } = this.props;
    return (
      <ul>
        {notes.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => onDeleteNote(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

// const NoteList = ({ notes = [], onDeleteNote }) => (
//   <ul>
//     {notes.map(({ id, text }) => (
//       <li key={id}>
//         <span>{text}</span>
//         <button onClick={() => onDeleteNote(id)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );

const mapStateToProps = state => {
  return {
    notes: notesSelectors.getFilteredNotes(state),
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
