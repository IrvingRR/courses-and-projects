import styled, { css } from 'styled-components';

export const ButtonElement = styled.button`
min-width: 70px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    color: #fff;
    font-size: var(--fs-xs);
    letter-spacing: 1px;

    ${ props => props.variant === 'secondary' && css `
        background-color: ${ props.theme.backgroundSecondary };
        color: ${ props.theme.fontColor };
    ` }

    ${ props => props.variant === 'outline-primary' && css `
        background-color: transparent;
        color: var(--primary-color);
        border-color: var(--primary-color);
    ` }
`;

export const LoaderButton = styled.span`
    width: 15px;
    height: 15px;
    border: 2px solid #fff;
    border-radius: 100%;
    border-right-color: #ddd;
    animation: rotateAnimation 1s infinite linear;
`;