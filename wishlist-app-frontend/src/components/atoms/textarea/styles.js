import styled from 'styled-components';

export const TextAreaControl = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px 20px;
    border-radius: var(--radius);
    border: var(--border-dark);
    background-color: var(--dark-color);
    transition: var(--transition);
    color: var(--font-color);
    resize: none;

    &:focus {
        background-color: transparent;
    }
`;