import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../redux/plannerSlice';

const DatePicker = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.planner.selectedDate);

  return (
    <input
      type="date"
      value={date}
      onChange={(e) => dispatch(selectDate(e.target.value))}
    />
  );
};

export default DatePicker;
