import React from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes }) => (
  <ul>
    {notes.map(({ id }) => (
      <NoteListItem key={id} id={id} />
    ))}
  </ul>
);

export default NoteList;
