// src/components/TaskList.jsx
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../selectors';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

export default function TaskList({ categoryId }) {
  const tasks = useSelector(selectTasksByCategory(categoryId));
  const dispatch = useDispatch();

  const handleToggle = useCallback((id) => dispatch(toggleTask(id)), [dispatch]);
  const handleDelete = useCallback((id) => dispatch(deleteTask(id)), [dispatch]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
          {task.title}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
