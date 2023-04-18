import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: ${({theme}) => theme.backgroundPrimaryColor};
    color: ${({theme}) => theme.fontPrimaryColor};
    display: flex; 
    flex-direction: column;
    gap: 10px;
    border-radius: var(--radius-primary);

    h2 {
        padding-bottom: 10px;
    }
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FieldContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const Label = styled.label`
    width: 100%;
    color: ${({theme}) => theme.fontPrimaryColor};
    font-weight: bold;
`;

export const InputControl = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid ${({theme}) => theme.borderColor};
    color: ${({theme}) => theme.fontPrimaryColor};
    background-color: transparent;
    padding: 10px 20px;
    border-radius: var(--radius-primary);

    &::placeholder {
        color: ${({theme}) => theme.borderColor};
    }
`;

export const TextArea = styled(InputControl)`
    height: 100px;
    resize: none;
`;

export const Legend = styled.div`
    width: 100%;
    height: 0;
    display: flex;
    align-items: center;
    color: var(--error-color);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    ${props => props.isValid === false && css`
        height: 20px;
        opacity: 1;
        visibility: visible;
    `}
`;

export const SubInputsElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;