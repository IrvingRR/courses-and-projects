import { useContext } from "react";
import { MainTemplateContainer, MainTemplateContent } from "../styled";
import { Board, Sidebar, Header } from "../components";
import { useShowHiddeElement } from "../hooks";
import { BoardContext } from "../context";


export const MainTemplate = () => {

  const { boardState } = useContext(BoardContext);
  const { isVisible, handleShowElement, handleHiddeElement } = useShowHiddeElement(true);
  
  return (
    <MainTemplateContainer>
        <Sidebar isVisible={isVisible} handleHiddeElement={handleHiddeElement} data={boardState.boards}/>
        <MainTemplateContent>
          <Header handleShowElement={handleShowElement}/>
          <Board/>
        </MainTemplateContent>
    </MainTemplateContainer>
  )
}
