import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

export default function TaskForm() {
  const [text, setText] = useState('');
  const { dispatch } = useTaskContext();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="border p-2 w-full" value={text} onChange={e => setText(e.target.value)} placeholder="Add a task..." />
    </form>
  );
}