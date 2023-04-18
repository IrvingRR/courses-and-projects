import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backgroud-color);
    z-index: 9999;
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    h2 {
        font-size: var(--fs-xl-1);
        color: var(--primary-color);

        span { color: var(--font-color);}
    }

    ${ props => props.isLoading === true && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    ` }
`;

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 3px solid var(--gray-color);
    border-right-color: var(--primary-color);
    border-left-color: var(--dark-color);
    animation: rotate 1s infinite linear;
    transition: var(--transition);
`;