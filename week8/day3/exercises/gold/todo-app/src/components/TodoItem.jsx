import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.title}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </li>
  );
}
