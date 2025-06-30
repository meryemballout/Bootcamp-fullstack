// src/App.js
import React from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useSelector } from 'react-redux';

function App() {
  const selectedDay = useSelector(state => state.tasks.selectedDay);

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Daily Planner</h1>
      <DatePicker />
      <TaskForm day={selectedDay} />
      <TaskList />
    </div>
  );
}

export default App;
