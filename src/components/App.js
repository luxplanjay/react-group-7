import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteFilter from './NoteFilter';

const App = () => (
  <>
    <NoteForm />
    <NoteFilter />
    <NoteList />
  </>
);

export default App;
