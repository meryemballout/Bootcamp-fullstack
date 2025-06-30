// src/App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/tasksSlice';
import { addCategory } from './redux/categoriesSlice';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';

function App() {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddTask = () => {
    if (taskTitle && selectedCategory) {
      dispatch(addTask(taskTitle, selectedCategory));
      setTaskTitle('');
    }
  };

  const handleAddCategory = () => {
    if (categoryName) {
      dispatch(addCategory(categoryName));
      setCategoryName('');
    }
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>

      <div>
        <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="New Category" />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      <div>
        <CategorySelector selectedId={selectedCategory} onChange={setSelectedCategory} />
        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New Task" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <TaskList categoryId={selectedCategory} />
    </div>
  );
}

export default App;
