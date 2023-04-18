import { ClassCard } from "../../components/panel/ClassCard";
import { ClassesCardsStyled, ClasesCardsLegend } from "../../styled";

export const ClassesCardsView = ({ classes = [] }) => {

  return (
    <ClassesCardsStyled>
        { 
            classes.length > 0 
            ?   classes.map(currentClass => <ClassCard key={currentClass.id} data={ currentClass }/>)
            :   <ClasesCardsLegend>No clases</ClasesCardsLegend>
        }
    </ClassesCardsStyled>
  );
};
