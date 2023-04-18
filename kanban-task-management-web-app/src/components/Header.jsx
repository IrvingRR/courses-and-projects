import { useContext, useState } from "react";
import {  FiPlus, FiMoreVertical, FiEye } from "react-icons/fi";
import { HeaderStyled, HeaderOptions, HeaderOption } from "../styled";
import { Button, FormAddTask, IconButton, Modal } from "./";
import { BoardContext } from "../context";
import { useModal } from "../hooks";

export const Header = ({ handleShowElement }) => {

  const [isActive, setIsActive] = useState(false);
  const {boardState} = useContext(BoardContext);
  const { board } = boardState;

  const handleOptions = () => {
    handleShowElement()
    setIsActive(false);
  }

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <FormAddTask/>
      </Modal>
      <HeaderStyled>
          <h2>{board.title || 'Welcome'}</h2>
          <div className="board-header-actions">
            {board.title 
              && <Button rounded onClick={handleOpenModal}>
                  <FiPlus/>
                  Add New Task
                </Button>
            }
            <IconButton variant='transparent' icon={<FiMoreVertical/>} onClick={() => setIsActive(!isActive)}/>
                <HeaderOptions isActive={isActive}>
                  <HeaderOption onClick={handleOptions}>
                    <FiEye/>
                    Show sidebar
                  </HeaderOption>
              </HeaderOptions>
          </div>
      </HeaderStyled>
    </>
  )
}
