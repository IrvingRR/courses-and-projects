import { BoardStyled, BoardColumnAdd } from '../styled';
import {  FiPlus } from "react-icons/fi";
import { useContext } from 'react';
import { BoardContext } from '../context';
import { BoardColumn } from './BoardColumn';
import { Modal, FormAddColumn } from './';
import { useModal } from '../hooks';

export const Board = () => {

    const { boardState } = useContext(BoardContext);
    const { board } = boardState;
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <FormAddColumn handleCloseModal={handleCloseModal}/>
      </Modal>
      <BoardStyled>
        {
            board.columns && board.columns.map((column, index) => <BoardColumn key={`${column}-${index}`} column={column}/>)
        }
        <BoardColumnAdd onClick={handleOpenModal}>
            <FiPlus/>
            <h2>New Column</h2>
        </BoardColumnAdd>
      </BoardStyled>
    </>
  )
}

