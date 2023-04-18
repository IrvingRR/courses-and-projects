import styled from 'styled-components';

export const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--background-primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
`;

export const Spinner = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 4px solid var(--background-secondary-color);
    border-right-color: var(--primary-color);
    animation: spinner-animation 1s infinite linear;
    transition: var(--transition);

    @keyframes spinner-animation {
        0% {
            transform: rotate(0);
        };

        100% {
            transform: rotate(360deg);
        }
    }
`;

