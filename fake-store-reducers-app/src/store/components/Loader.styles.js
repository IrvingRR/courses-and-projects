import styled, {css} from 'styled-components';

export const ContainerLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 0;
    transition: 0.3s ease;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;

    ${props => props.loading === 'true' && css`
        height: 100vh;
        visibility: visible;
        opacity: 1;
    `}
`;

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 5px solid #ccc;
    border-right-color: var(--danger-color);
    animation: spinnerAnimation 1s linear infinite;

    @keyframes spinnerAnimation {
        0% {
            transform: rotate(0);
        };

        100% {
            transform: rotate(360deg);
        }
    }   
`;

