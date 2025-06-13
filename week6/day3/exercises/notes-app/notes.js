const fs = require('fs');

// Charger les notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

// Sauvegarder les notes
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

// Ajouter une note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('Note added successfully!');
  } else {
    console.log('Note already exists');
  }
};

// Lister les notes
const listNotes = () => {
  const notes = loadNotes();
  console.log('Your notes:');
  notes.forEach(note => console.log(`- ${note.title}`));
};

// Lire une note
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note not found');
  }
};

// Supprimer une note
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log('Note removed');
  } else {
    console.log('Note not found');
  }
};

module.exports = { addNote, listNotes, readNote, removeNote };
