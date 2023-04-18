import ReactDom from "react-dom";
import { FiX } from "react-icons/fi";
import { ModalWrapper, ModalButton } from "../styled";

export const Modal = ({ children, isOpen, handleCloseModal }) => {
  return ReactDom.createPortal(
    <ModalWrapper isOpen={isOpen}>
        <ModalButton onClick={handleCloseModal}>
            <FiX/>
        </ModalButton>
        { children }
    </ModalWrapper>,
    document.getElementById('portal')
  )
}
