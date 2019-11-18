import React from 'react';
import Timer from './Timer';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => (
  <div className="App">
    <Timer />
    <NoteForm />
    <NoteList />
  </div>
);

export default App;
