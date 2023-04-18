import '../styles/board.css';
import { BoardColumn } from './';

export const BoardColumns = ({ todos }) => {
  return (
    <div className="board-columns">
        <BoardColumn filter='pending' todos={todos}/>
        <BoardColumn filter='doing' todos={todos}/>
        <BoardColumn filter='completed' todos={todos}/>
    </div>
  )
}
