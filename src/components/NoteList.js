/* eslint-disable */
import React from 'react';

const NoteList = ({ notes, onDeleteNote, onUpdateCompleted }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id} className="Note">
        <span className="Note__text">{note.text}</span>
        <input
          type="checkbox"
          className="Checkbox"
          checked={note.completed}
          onChange={() => onUpdateCompleted(note.id)}
        />
        <button className="Button" onClick={() => onDeleteNote(note.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default NoteList;
