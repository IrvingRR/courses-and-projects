import styled, {css} from "styled-components";

export const IconButtonStyled = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: var(--radius-primary);
    font-size: var(--fs-m);
    position: relative;

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

    ${props => props.variant === 'transparent' && css`
        background-color: transparent;
        color: ${({theme}) => theme.fontSecondaryColor};

        &:hover {
            color: var(--primary-color);
            background-color: transparent;
        }
    `}
`;