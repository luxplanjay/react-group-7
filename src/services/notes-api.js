const fetchNotes = () => {
  return fetch('http://localhost:9000/notes').then(res => res.json());
};

const saveNote = note => {
  return fetch('http://localhost:9000/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

const deleteNote = id => {
  return fetch(`http://localhost:9000/notes/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
};

// const deleteNoteAsync = async id => {
//   const response = await fetch(`http://localhost:9000/notes/${id}`, {
//     method: 'DELETE',
//   });
//   const data = await response();

//   return data;
// };

export default { fetchNotes, saveNote, deleteNote };
