import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // npm install uuid

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuidv4(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemove(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
