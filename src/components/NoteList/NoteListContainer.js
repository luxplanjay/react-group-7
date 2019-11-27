import React, { Component } from 'react';
import { connect } from 'react-redux';
import notesSelectors from '../../redux/notes/notesSelectors';
import notesOperations from '../../redux/notes/noteOperations';
import NoteList from './NoteList';

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return this.props.notes.length > 0 ? (
      <NoteList notes={this.props.notes} />
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    notes: notesSelectors.getFilteredNotes(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(notesOperations.fetchNotes()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
