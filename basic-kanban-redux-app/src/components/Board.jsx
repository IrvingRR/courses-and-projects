import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/slices/todosThunks';
import { BoardColumns } from './BoardColumns';
import { FormAddTodo } from './FormAddTodo';
import '../styles/board.css';

export const Board = () => {

  const { isLoading, todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getTodos());

  }, []);

  if(isLoading) return <h3>Loading...</h3>

  return (
    <div className="board">
        <FormAddTodo/>
        <BoardColumns todos={todos}/>
    </div>
  )
}
