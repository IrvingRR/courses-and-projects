import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    border-radius: var(--radius);
`;

export const FormTitle = styled.h2`
    padding: 8px 0;
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: var(--transition);
`;

export const FieldLabel = styled.label`
    width: 100%;
    font-size: var(--fs-xs);
`;

export const FieldContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FieldInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: var(--radius);
    padding: 10px 20px;
    background-color: var(--background-secondary-color);
    color: var(--font-primary-color);
    transition: var(--transition);

    &:focus {
        border-color: var(--primary-color);
        background-color: transparent;
    }

    &[type='file'] {
        background-color: var(--background-secondary-color);
        padding: 0;
        width: 100%;
        cursor: pointer;

        &::focus {
            border-color: transparent;
        }

        &::-webkit-file-upload-button {
            visibility: hidden;
        }

        & {
            color: transparent;
        }

        &::-webkit-file-upload-button {
            visibility: hidden;
        }

        &::before {
            content: 'Select a file';
            width: 100%;
            height: 100%;
            display: flex;
            font-size: var(--fs-xs);
            justify-content: center;
            align-items: center;
            color: black;
            padding: 10px 20px;
            display: inline-block;
            border-radius: var(--radius);
            cursor: pointer;
            color: var(--font-primary-color);
        }
    }

    

    ${ props => props.isValid === false && css`
        border-color: var(--error-color);
    ` }

    
`;

export const FieldLegend = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--error-color);
    transition: var(--transition);
    font-size: var(--fs-s);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    height: 0;

    ${ props => props.isValid === false && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        height: auto;
    ` }
`;

export const FormButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
`;

export const FormLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: center;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    border-radius: var(--radius);
    padding: 10px 20px;
    background-color: var(--background-secondary-color);
    color: var(--font-primary-color);
    transition: var(--transition);

    &:focus {
        border-color: var(--primary-color);
        background-color: transparent;
    }

`;