import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import notesSelectors from '../redux/notes/notesSelectors';

class NoteList extends Component {
  render() {
    console.log('NoteList re-render!!!' + Date.now());

    const { notes = [] } = this.props;
    return (
      <ul>
        {notes.map(({ id }) => (
          <NoteListItem key={id} id={id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: notesSelectors.getFilteredNotes(state),
  };
};

export default connect(mapStateToProps)(NoteList);
