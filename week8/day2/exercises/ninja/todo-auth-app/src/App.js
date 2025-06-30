import React from 'react';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{padding: '20px'}}>
      <Auth />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
