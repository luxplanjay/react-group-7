import React from 'react';
import Timer from './Timer';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteFilter from './NoteFilter';

const App = () => (
  <div className="App">
    <Timer />
    <hr />
    <NoteForm />
    <NoteFilter />
    <NoteList />
  </div>
);

export default App;
