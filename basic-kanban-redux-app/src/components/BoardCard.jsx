import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTodoById, updateTodoById } from '../store/slices/todosThunks';
import '../styles/board.css';

export const BoardCard = ({  data = {}}) => {
  
  const dispatch = useDispatch();
  const [status, setStatus] = useState(data.status);

  const handleDeleteTodo = () => dispatch(deleteTodoById(data.id));

  const handleChange = (e) => {
    dispatch(updateTodoById(data.id, { ...data, status: e.target.value }));
  }
  
  return (
    <div className="board-card">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <select name="status" value={data.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="doing">Doing</option>
            <option value="completed">Completed</option>
        </select>
        <button className="button-delete" onClick={handleDeleteTodo}>Remove</button>
    </div>
  )
}
