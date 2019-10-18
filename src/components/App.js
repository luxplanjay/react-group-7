import React, { Component } from 'react';
import shortid from 'shortid';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import storage from '../services/storage';

export default class App extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    console.log('componentDidMount');

    const notes = storage.get('notes');

    if (notes) {
      this.setState({ notes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { notes } = this.state;

    if (prevState.notes !== notes) {
      storage.save('notes', notes);
    }
  }

  saveNote = text => {
    const note = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(
      state => ({
        notes: [...state.notes, note],
      }),
      this.saveToStorage,
    );
  };

  deleteNote = noteId => {
    this.setState(
      state => ({
        notes: state.notes.filter(note => note.id !== noteId),
      }),
      this.saveToStorage,
    );
  };

  updateNoteStatus = noteId => {
    this.setState(
      state => ({
        notes: state.notes.map(note =>
          note.id === noteId ? { ...note, completed: !note.completed } : note,
        ),
      }),
      this.saveToStorage,
    );
  };

  // updateNoteStatus = noteId => {
  //   this.setState(state => ({
  //     notes: state.notes.map(note => {
  //       if (note.id === noteId) {
  //         return {
  //           ...note,
  //           completed: !note.completed,
  //         };
  //       }

  //       return note;
  //     }),
  //   }));
  // };

  render() {
    console.log('render');
    const { notes } = this.state;
    return (
      <div className="App">
        <NoteEditor onSave={this.saveNote} />
        {notes.length > 0 && (
          <NoteList
            notes={notes}
            onDeleteNote={this.deleteNote}
            onUpdateCompleted={this.updateNoteStatus}
          />
        )}
      </div>
    );
  }
}
