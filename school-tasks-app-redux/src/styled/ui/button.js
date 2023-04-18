import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    padding: 8px 14px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--primary-color);
    color: var(--font-primary-color);
    letter-spacing: 1px;
    font-size: var(--fs-xs);

    svg {
        font-size: var(--fs-s);
    }

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    &:disabled {
        background-color: var(--disabled-color);
    }

    /* Variants */

    ${props => props.variant === 'outline' && css`
        background-color: transparent;
        border-color: var(--primary-color);

        &:hover {
            background-color: transparent;
            border-color: var(--primary-color-hover);
        }

        &:active {
            border-color: var(--primary-color);
        }

        &:disabled {
            background-color: transparent;
            border-color: var(--disabled-color);
            color: var(--disabled-color);
        }
    `}
`;