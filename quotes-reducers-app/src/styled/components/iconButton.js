import styled, { css } from "styled-components";

export const IconButtonElement = styled.button`
    width: 30px;
    height: 30px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: #fff;
    font-size: var(--fs-m);

    ${ props => props.variant === 'outline-gray' && css`
        background-color: transparent;
        color: ${({theme}) => theme.fontColor};
        border-color: #ccc;

        &:hover {
            background-color: var(--primary-color);
            color: #fff;
        }
    ` }

    ${ props => props.variant === 'transparent' && css`
        background-color: transparent;
        color: ${({theme}) => theme.fontColor};
        border-color: transparent;
    ` }

    ${ props => props.variant === 'danger' && css`
        background-color: var(--danger-color);
        color: #fff;
        border-color: var(--danger-color);
    ` }
`;