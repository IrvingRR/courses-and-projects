import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: auto;
    width: 100%;
    transition: var(--transition);
`;

export const Control = styled.input`
    background-color: ${ props => props.theme.bgComponent };
    border-radius: var(--radius-primary);
    border: 1px solid ${ props => props.theme.bgComponent };
    height: 45px;
    padding: 10px 20px;
    transition: var(--transition);
    width: 100%;
    color: ${ props => props.theme.fontColor };

    &:focus {
        background-color: transparent;
    }
`;

export const Legend = styled.p`
    align-items: center;
    color: var(--primary-color);
    display: flex;
    width: 100%;
    transition: var(--transition);
    font-size: var(--fs-s);
    height: 0;
    overflow: hidden;

    ${ props => props.isValid === false && css`
        height: 20px;
    ` }
`;