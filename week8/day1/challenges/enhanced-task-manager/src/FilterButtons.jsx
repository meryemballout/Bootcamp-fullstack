import React from 'react';
import { useTaskContext } from './TaskContext';

export default function FilterButtons() {
  const { state, dispatch } = useTaskContext();
  const filters = ['all', 'completed', 'active'];

  return (
    <div className="mb-4 flex gap-2">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => dispatch({ type: 'FILTER_TASKS', payload: f })}
          className={`px-3 py-1 border ${state.filter === f ? 'bg-blue-500 text-white' : ''}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
