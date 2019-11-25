import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/notes/noteActions';
import notesSelectors from '../redux/notes/notesSelectors';

class NoteListItem extends Component {
  render() {
    console.log(`NoteListItem ${this.props.text} re-render!`);

    const { text, onDelete } = this.props;

    return (
      <li>
        <span>{text}</span>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const note = notesSelectors.getNoteById(state, ownProps.id);

  return {
    ...note,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(noteActions.remove(ownProps.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListItem);
