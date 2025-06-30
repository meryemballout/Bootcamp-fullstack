// App.js
import React from 'react';
import TaskProvider from './TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterButtons from './FilterButtons';

export default function App() {
  return (
    <TaskProvider>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Enhanced Task Manager</h1>
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
