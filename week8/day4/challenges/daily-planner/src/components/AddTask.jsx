import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/plannerSlice';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask({ date: selectedDate, text }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
