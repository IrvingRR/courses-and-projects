import { useSelector } from "react-redux";
import { KanbanBody, KanbanColumnStyled, KanbanColumnHeader, KanbanTitle } from "../styled";
import { KanbanCard } from "./KanbanCard";

export const KanbanColumn = ({ title, icon, limit, color, filter }) => {

  const { candidates } = useSelector(state => state.candidates);

  const filteredCandidates = candidates.filter(candidate => candidate.status.toLowerCase() === filter.toLowerCase());


  // Handle drag start
  const handleDragStart = (e, index) => {
    console.log('Drag started', index);
  } 

  // Handle drag enter
  const handleDragEnter = (e, index) => {
    console.log('Drag started', index);
  } 

  // Handle drag end
  const handleDragEnd = (e, index) => {
    console.log('Drag end', index);
  } 

  return (
    <KanbanColumnStyled>
        <KanbanColumnHeader color={color}>
            <KanbanTitle color={color}>
                {icon}
                {title}
            </KanbanTitle>
            {filteredCandidates.length}/{limit}
        </KanbanColumnHeader>
        <KanbanBody>
            {filteredCandidates.length > 0 
              && filteredCandidates.map(candidate => <KanbanCard key={candidate.id} candidate={candidate}/>)
            }
  
        </KanbanBody>
    </KanbanColumnStyled>
  )
}
