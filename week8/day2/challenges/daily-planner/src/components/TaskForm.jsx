// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';

export default function TaskForm({ day, task, onClose }) {
  const dispatch = useDispatch();
  const [text, setText] = useState(task ? task.text : '');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return alert("Task can't be empty");

    if (task) {
      dispatch(editTask({ day, taskId: task.id, newText: text }));
      if (onClose) onClose();
    } else {
      dispatch(addTask(day, text));
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">{task ? 'Save' : 'Add'}</button>
      {task && <button type="button" onClick={onClose}>Cancel</button>}
    </form>
  );
}
