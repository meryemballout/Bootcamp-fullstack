import React from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Age Tracker with Redux Toolkit & Thunk</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
