import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import { deleteTask } from './redux/plannerSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <DatePicker />
      <AddTask />
      {taskToEdit && (
        <EditTask task={taskToEdit} onClose={() => setTaskToEdit(null)} />
      )}
      <TaskList
        onEdit={task => setTaskToEdit(task)}
        onDelete={id => dispatch(deleteTask({ date: selectedDate, id }))}
      />
    </div>
  );
};

export default App;
