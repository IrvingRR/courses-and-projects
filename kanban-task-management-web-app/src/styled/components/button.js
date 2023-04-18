import styled, {css} from "styled-components";

export const ButtonStyled = styled.button`
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: var(--radius-primary);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    ${props => props.variant === 'secondary' && css`
        background-color: var(--white-color);
        color: var(--primary-color);
    `}

    ${props => props.rounded && css`
        border-radius: var(--radius-secondary);
    `}
`;