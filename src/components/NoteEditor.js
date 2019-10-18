/* eslint-disable */
import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="Input"
          value={text}
          onChange={this.handleChange}
        />

        <button type="submit" className="Button">
          Save
        </button>
      </form>
    );
  }
}
