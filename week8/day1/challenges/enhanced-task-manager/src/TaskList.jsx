import React from 'react';
import { useTaskContext } from './TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { state } = useTaskContext();
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}