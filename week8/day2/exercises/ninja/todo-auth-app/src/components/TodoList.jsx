import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList() {
  const todos = useSelector(state => state.todo.todos);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState('');

  if(!isAuthenticated) return <p>Vous devez être connecté pour voir les todos.</p>;

  const addTodo = () => {
    if(todoText.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: todoText } });
    setTodoText('');
  };

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
      <h2>Ma Todo List</h2>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTodo}>Ajouter</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => removeTodo(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
