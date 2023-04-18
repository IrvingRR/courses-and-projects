import styled, { css } from 'styled-components';

export const IconButtonStyled = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: var(--fs-m);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    ${props => props.variant === 'outline' && css`
        background-color: transparent;
        color: var(--font-primary-color);
        border-color: var(--border-color);

        &:hover {
            background-color: var(--secondary-color);
        }

        &:active {
            background-color: transparent;
        }
    `}

    ${props => props.rounded && css`
        border-radius: 100%;
    `}

    ${props => props.variant === 'transparent' && css`
        background-color: transparent;
        border-color: transparent;
        color: var(--font-primary-color);

        &:hover {
            background-color: var(--secondary-color);
        }

        &:active {
            background-color: transparent;
        }
    `}
`;