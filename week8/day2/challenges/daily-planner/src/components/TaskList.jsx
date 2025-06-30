// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import TaskForm from './TaskForm';

export default function TaskList() {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.tasks.selectedDay);
  const tasks = useSelector(state => state.tasks.tasksByDay[selectedDay] || []);

  // État local pour gestion édition
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div>
      <h3>Tasks for {selectedDay}</h3>
      {tasks.length === 0 && <p>No tasks for this day.</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <TaskForm
                task={task}
                day={selectedDay}
                onClose={() => setEditingTaskId(null)}
              />
            ) : (
              <>
                <span>{task.text}</span>{' '}
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>{' '}
                <button onClick={() => dispatch(deleteTask({ day: selectedDay, taskId: task.id }))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
