import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius);
    background-color: var(--background-primary-color);
    padding: 20px;
    overflow: hidden;

    h2 {
        padding: 10px 0;
    }
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px; 
    padding: 5px 0;
`;

export const FieldLabel = styled.label`
    width: 100%;
`;

export const FieldContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`;

export const FieldInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: var(--radius);
    font-family: var(--font);
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FieldLegend = styled.p`
    width: 100%;
    height: 0;
    opacity: 0;
    visibility: hidden;
    color: var(--error-color);
    transition: var(--transition);

    ${props => props.isValid === false && css`
        height: 20px;
        opacity: 1;
        visibility: visible;
    `}
`;

export const ButtonsGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: var(--radius);
    font-family: var(--font);
    resize: vertical;
`;

export const FieldTags = styled.div`
    /* width: 100%; */
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    padding: 10px 0;
`;

export const FieldTag = styled.span`
    background-color: #eee;
    font-size: var(--fs-s);
    border-radius: var(--radius);
    align-items: center;
    font-size: var(--fs-xs);
    padding: 5px 8px;
    position: relative;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
        background-color: var(--error-color);
        color: var(--white-color);
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 35px;
    padding: 0 15px;
    border: 1px solid #ccc;
    border-radius: var(--radius);
    font-family: var(--font);
`;