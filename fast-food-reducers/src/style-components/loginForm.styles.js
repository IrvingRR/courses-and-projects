import styled from 'styled-components';

export const Form = styled.form`
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 400px;
    padding: 20px;
    width: 100%;
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: ${ props => props.justifyContent && props.justifyContent };
`;