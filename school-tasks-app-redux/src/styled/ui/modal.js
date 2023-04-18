import styled, {css} from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    transition: var(--transition);
    background-color: var(--background-primary-color);
    top: 0;
    left: 0;
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
    z-index: 99;

    ${props => props.isOpenModal && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const ModalCloseButton = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    color: var(--font-primary-color);
    background-color: transparent;
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: var(--fs-l);
`;

export const ModalContent = styled.div`
    /* position: relative; */
    border: 1px solid red;
    width: auto;
`;