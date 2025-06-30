
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTodo({ id: Date.now(), title, completed: false }));
      setTitle('');
    }
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add new todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
