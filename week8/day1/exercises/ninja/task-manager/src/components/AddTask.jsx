import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
