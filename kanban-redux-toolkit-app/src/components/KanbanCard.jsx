import { KanbanCardStyled } from '../styled';

const DefaultImageUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';

export const KanbanCard = ({ candidate = {} }) => {
  return (
    <KanbanCardStyled draggable>
        <div className="card-information">
            <img src={candidate.image || DefaultImageUrl} alt={candidate.name} />
            <div className="user-information">
                <h3>{candidate.name}</h3>
                <span>{candidate.role}</span>
            </div>
        </div>
        <div className="card-tags">
          {
            candidate.technologies.length > 0
            ? candidate.technologies.map((technology, index) => <span key={`${technology}-${index}`} className="card-tag">{technology}</span>)
            : <span>No technologies</span>
          }
        </div>
    </KanbanCardStyled>
  )
}
