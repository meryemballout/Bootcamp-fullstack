import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = ({ onEdit, onDelete }) => {
  const { selectedDate, tasksByDate } = useSelector(state => state.planner);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEdit(task)}>✏️</button>
          <button onClick={() => onDelete(task.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
