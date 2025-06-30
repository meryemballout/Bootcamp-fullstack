// src/components/BookList.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectFantasyBooks,
  selectHorrorBooks,
  selectScienceFictionBooks,
} from '../features/books/booksSelectors';

const genreMap = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

export default function BookList() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = useSelector(genreMap[selectedGenre]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book Inventory</h1>

      <div className="mb-4">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="border rounded p-2"
        >
          {Object.keys(genreMap).map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="border p-3 rounded shadow">
            <p><strong>{book.title}</strong> by {book.author}</p>
            <p className="text-sm text-gray-600">{book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
