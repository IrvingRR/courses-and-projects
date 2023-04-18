import styled, {css} from 'styled-components';

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: var(--background-primary-color);
    transition: var(--transition);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;

    h3 {
        font-size: var(--fs-s);
    }

    ${props => props.isLoading && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Spinner = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid var(--font-primary-color);
    border-right-color: var(--primary-color);
    animation: rotate 1s linear infinite;
    transition: var(--transition);
`;