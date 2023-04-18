import styled, { css } from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: ${ props => props.maxWidth ? props.maxWidth : '500px' };
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: ${ props => props.padding ? props.padding : 'var(--padding-component)' };

    h2 {
        font-size: var(--fs-xl-3);
    }
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    ${ props => props.grid && css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 10px;
    ` }
`;