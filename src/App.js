import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import Note from "./Notes";
import Footer from './Footer'
import CreateArea from './CreateArea'
import Heading from './Heading';


const App = () => {
  const [note, setNote] = useState([]);

  const addNote = (newNote) => {
    setNote((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNote((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  };

  return (
    <div>
      <Header />
      <Heading />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
