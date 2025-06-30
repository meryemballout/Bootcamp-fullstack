// src/components/CategorySelector.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../selectors';

export default function CategorySelector({ selectedId, onChange }) {
  const categories = useSelector(selectCategories);

  return (
    <select value={selectedId} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
