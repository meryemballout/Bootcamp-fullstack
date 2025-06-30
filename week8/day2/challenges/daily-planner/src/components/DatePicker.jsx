// src/components/DatePicker.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDay } from '../redux/tasksSlice';

export default function DatePicker() {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.tasks.selectedDay);

  function handleChange(e) {
    dispatch(setSelectedDay(e.target.value));
  }

  return (
    <div>
      <label>
        Select day:{' '}
        <input type="date" value={selectedDay} onChange={handleChange} />
      </label>
    </div>
  );
}
