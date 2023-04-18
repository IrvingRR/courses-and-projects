import styled, {css} from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    ${props => props.isOpen === true && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const ButtonCloseModal = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-l);
    color: var(--white-color);
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
`;