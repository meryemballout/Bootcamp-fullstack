import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/plannerSlice';

const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleDelete = () => {
    dispatch(deleteTask({ date: selectedDate, id: taskId }));
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteTask;
