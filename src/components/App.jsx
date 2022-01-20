import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <Fragment>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          color={note.color}
          onDelete={deleteNote}
        />
      ))}
    </Fragment>
  );
}

export default App;
