import React from 'react';
import { useSelector } from 'react-redux';

export default function AgeDisplay() {
  const age = useSelector(state => state.age.age);
  const loading = useSelector(state => state.age.loading);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>Current Age: {age}</h2>
      {loading && <div>Loading... ⏳</div>}
    </div>
  );
}
