import { useContext } from "react";
import { FiSlack, FiClipboard, FiSun, FiMoon, FiPlus, FiEyeOff } from "react-icons/fi";
import { SidebarStyled, SidebarHeader, SidebarElements, SidebarElement, SidebarToggleTheme, SidebarActions, SidebarElementButton } from "../styled";
import { BoardContext, ModeContext } from "../context";
import { Modal, FormCreateBoard } from "./";
import { useModal } from "../hooks";

export const Sidebar = ({ isVisible, handleHiddeElement, data }) => {

    const { mode, handleChangeMode } = useContext(ModeContext);
    const { getOnlyBoard } = useContext(BoardContext);
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const boards = !!data && data;

  return (
    <>
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <FormCreateBoard handleCloseModal={handleCloseModal}/>
    </Modal>

    <SidebarStyled isActive={isVisible}> 
        <SidebarHeader>
            <FiSlack/>
            <h2>Kanban</h2>
        </SidebarHeader>
        <SidebarElements>
            <SidebarElement>
                <p>ALL BOARDS ({boards.length})</p>
            </SidebarElement>

                {
                    boards.length > 0 && boards.map(board => (
                        <SidebarElement key={board.title} onClick={() => getOnlyBoard(board.id)}>
                            <FiClipboard/>
                            {board.title}
                        </SidebarElement>
                    ))
                }
            
            <SidebarElementButton onClick={handleOpenModal}>
                <button>
                    <FiPlus/>
                    Create new board
                </button>
            </SidebarElementButton>
        </SidebarElements>
        <SidebarActions>
            <SidebarToggleTheme mode={mode}>
                <FiSun/>
                    <button onClick={handleChangeMode}>
                        <span></span>
                    </button>
                <FiMoon/>
            </SidebarToggleTheme>
            <button className="toggle-sidebar" onClick={handleHiddeElement}>
                <FiEyeOff/>
                Hidde sidebar
            </button>
        </SidebarActions>
    </SidebarStyled>
    </>
  )
}
