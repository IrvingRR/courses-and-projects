import ReactDom from 'react-dom';
import { FiX } from "react-icons/fi";
import { ModalContainer, ButtonCloseModal } from '../styled';

export const Modal = ({children, isOpen, handleCloseModal}) => {
  return ReactDom.createPortal(
    <ModalContainer isOpen={isOpen}>
        <ButtonCloseModal onClick={handleCloseModal}>
            <FiX/>
        </ButtonCloseModal>
        {children}
    </ModalContainer>,
    document.getElementById('portal')
  )
}
