import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteFilter from './NoteFilter';

const App = () => (
  <div className="App">
    <NoteForm />
    <NoteFilter />
    <NoteList />
  </div>
);

export default App;
