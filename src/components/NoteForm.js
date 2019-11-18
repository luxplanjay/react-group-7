import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/notes/noteActions';

class NoteForm extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onChange={this.onChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: text => dispatch(noteActions.add(text)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(NoteForm);
