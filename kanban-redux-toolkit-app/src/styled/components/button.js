import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: var(--fs-xs);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    ${props => props.variant === 'secondary' && css`
        background-color: var(--secondary-color);
        color: var(--font-primary-color);

        &:hover {
            background-color: transparent;
            border-color: var(--border-color);
        }

        &:active {
            background-color: var(--secondary-color);
            border-color: transparent;
        }
    `}

    ${props => props.rounded && css`
        border-radius: 80px;
    `}

`;