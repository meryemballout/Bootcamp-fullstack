import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../redux/plannerSlice';

const EditTask = ({ task, onClose }) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleSave = () => {
    dispatch(editTask({ date: selectedDate, id: task.id, text }));
    onClose();
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTask;
