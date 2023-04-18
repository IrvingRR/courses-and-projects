import styled from 'styled-components';

export const BoardStyled = styled.div`
    height: 100%;
    display: flex;
    overflow: auto;
`;

export const BoardColumnElement = styled.div`
    width: 300px;
    height: 100%;
`

export const BoardColumnHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 20px;
    background-color: ${({theme}) => theme.backgroundPrimaryColor};
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({theme}) => theme.fontSecondaryColor};
`;

export const BoardColor = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: var(--secondary-color);
`;

export const BoardColumnBody = styled.div`
    width: 300px;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    overflow-y: auto;
`;

export const BoardCard = styled.div`
    width: 100%;
    border-radius: var(--radius-primary);
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${({theme}) => theme.backgroundSecondaryColor};
    padding: 20px;
    font-size: var(--fs-sx);
`;

export const BoardColumnAdd = styled.div`
    width: 300px;
    max-width: 300px;
    height: 90%;
    background-color: ${({theme}) => theme.backgroundThirdColor};
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.fontSecondaryColor};
    gap: 5px;
    cursor: pointer;
    transition: var(--transition);
    padding: 20px;
    
    svg {
        font-size: var(--fs-m);
    }

    &:hover {
        color: var(--primary-color);
    }
`;