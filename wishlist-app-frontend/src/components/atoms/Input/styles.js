import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
    width: ${ props => props.width ? props.width : '100%' };
    height: auto;
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    transition: var(--transition);
    /* background: green; */
`;

export const InputControl = styled.input`
    width: 100%;
    height: 35px;
    padding: 10px 20px;
    border-radius: var(--radius);
    border: var(--border-dark);
    background-color: var(--dark-color);
    transition: var(--transition);
    color: var(--font-color);

    &:focus {
        background-color: transparent;
    }

    &[type=color] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        height: 35px;
        padding: 0;
        background-color: transparent;

        &::-webkit-color-swatch {
            border-radius: var(--radius);
            border: none;
        }

        &::-moz-color-swatch {
            border-radius: var(--radius);
            border: none;
        }
    }
`;

export const Legend = styled.p`
    width: 100%;
    height: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: var(--secondary-color);
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;
    border-radius: var(--radius);

    ${ props => props.isValid === false && css`
        height: 30px;
        opacity: 1;
        visibility: visible;
        padding: 5px 20px;
    ` }
`;