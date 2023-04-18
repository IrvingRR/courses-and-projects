import { useContext } from 'react';
import { BoardColumnElement, BoardColumnHeader, BoardColor, BoardColumnBody, BoardCard} from '../styled';
import { BoardContext } from '../context';

export const BoardColumn = ({ column }) => {
  
  const {boardState} = useContext(BoardContext);
  const {board} = boardState;

  return (
    <BoardColumnElement>
        <BoardColumnHeader>
            <BoardColor/>
            {column.toUpperCase()}
        </BoardColumnHeader>
        <BoardColumnBody>
          {
            board.tasks.length > 0
            && board.tasks.map(task => task.status.toLowerCase() === column.toLowerCase() && (
              <BoardCard key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </BoardCard>
            ))
          }
        </BoardColumnBody>
    </BoardColumnElement>
  )
}
