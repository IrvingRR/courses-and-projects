import styled, { css } from "styled-components";

export const ButtonElement = styled.button`
    padding: 8px 10px;
    border-radius: var(--radius-button);
    color: var(--color-dark);
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--fs-s);

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    ${ props => props.variant === 'third' && css`
        background-color: ${ props => props.theme.thirdColor };
        color: ${ props => props.theme.fontColor };

        &:hover {
            background-color: ${ props => props.theme.thirdColorHover };
        }
    `}
`;