import React, { useState, useRef } from 'react';
import { useTaskContext } from './TaskContext';

export default function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleSave = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: inputRef.current.value } });
    setIsEditing(false);
  };

  return (
    <li className="mb-2 flex items-center gap-2">
      <input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })} />
      {isEditing ? (
        <>
          <input ref={inputRef} defaultValue={task.text} className="border px-2" />
          <button onClick={handleSave} className="text-green-600">Save</button>
        </>
      ) : (
        <>
          <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
          <button onClick={() => setIsEditing(true)} className="text-blue-600">Edit</button>
        </>
      )}
    </li>
  );
}