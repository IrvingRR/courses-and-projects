import styled, {css} from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    ${props => props.isOpen && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const ModalButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-xl);
    color: var(--white-color);
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
`;