import '../styles/board.css';
import { BoardCard } from './BoardCard';

export const BoardColumn = ({ filter, todos = [] }) => {
  return (
    <div className="board-column">
        <div className="board-column-header">
            <h3>{filter.toUpperCase()}</h3>
        </div>
        <div className="board-column-body">
            {
                todos.map(todo => todo.status.toLowerCase() === filter.toLowerCase() && (
                    <BoardCard key={todo.id} data={todo}/>
                ))
            }
        </div>
    </div>
  )
}
