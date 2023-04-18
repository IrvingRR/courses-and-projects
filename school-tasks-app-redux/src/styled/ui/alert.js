import styled, { css } from "styled-components";

export const AlertStyled = styled.div`
    width: 100%;
    height: 35px;
    max-width: 500px;
    display: flex;
    align-items: center;
    border: 1px solid var(--background-secondary-color);
    border-radius: var(--radius);
    transition: var(--transition);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;

    ${props => props.isAlertActive && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}

    ${props => props.variant === 'success' && css`
        border-color: var(--success-color);
    `}

    ${props => props.variant === 'error' && css`
        border-color: var(--error-color);
    `}

    ${props => props.variant === 'info' && css`
        border-color: var(--info-color);
    `}
`;

export const AlertIcon = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    background-color: var(--background-secondary-color);
    color: var(--font-primary-color);

    ${props => props.variant === 'success' && css`
        background-color: var(--success-color);
    `}

    ${props => props.variant === 'error' && css`
        background-color: var(--error-color);
    `}

    ${props => props.variant === 'info' && css`
        background-color: var(--info-color);
    `}
`;

export const AlertBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--font-primary-color);
    padding: 10px 20px;

    span {
        font-size: var(--fs-xs);
    }
`;

export const AlertCloseButton = styled.button`
    background-color: transparent;
    color: var(--font-primary-color);
    border: none;
`;