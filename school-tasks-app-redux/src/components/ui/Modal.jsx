import ReactDOM from "react-dom";
import { ModalCloseButton, ModalContainer, ModalContent } from "../../styled"
import { FiX } from "react-icons/fi";

export const Modal = ({ children, handleCloseModal, isOpenModal }) => {
  return ReactDOM.createPortal(
    <ModalContainer isOpenModal={isOpenModal}>
            <ModalCloseButton onClick={handleCloseModal}>
                <FiX/>
            </ModalCloseButton>
            { children }
    </ModalContainer>,
    document.getElementById('portal')
  );
};
