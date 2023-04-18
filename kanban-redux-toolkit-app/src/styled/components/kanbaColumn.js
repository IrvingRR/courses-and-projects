import styled from 'styled-components';

export const KanbanColumnStyled = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const KanbanColumnHeader = styled.div`
    width: 100%;
    height: 35px;
    background-color: ${props => `var(--${props.color}-color-hover)`};
    position: relative;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-s);
    color: ${props => `var(--${props.color}-color)`};;
    justify-content: flex-end;
    padding: 10px;
    font-size: var(--fs-xs);
   
`;

export const KanbanTitle = styled.h3`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: ${props => `var(--${props.color}-color)`};
    padding: 10px;
    border-radius: var(--radius);
    font-size: var(--fs-xs);
    color: var(--white-color);
    font-weight: normal;
    position: absolute;
    left: 0;
`;

export const KanbanBody = styled.div`
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    margin-top: 10px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
`;