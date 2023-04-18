import styled, {css} from 'styled-components';

export const WorksCards = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
    gap: 20px;
`;

export const WorkCard = styled.div`
    width: 200px;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--font-primary-color);
    background-color: var(--background-secondary-color);
    border-left: 2px solid var(--background-third-color);
    padding: 20px 0;
    height: 200px;
    position: relative;
`;

export const WorkCardHeader = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    position: relative;
    
    h3 {
        font-size: var(--fs-xs);
    }

    svg {
        cursor: pointer;
        transition: var(--transition);

        &:hover {
            color: var(--primary-color);
        }
    }

    &::before {
        content: '';
        width: 3px;
        height: 100%;
        background-color: var(--completed-color);
        position: absolute;
        left: -2px;
        border-radius: var(--radius);
    }
`;

export const WorkCardHeaderOptions = styled.ul`
    width: 150px;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    background-color: var(--background-third-color);
    transition: var(--transition);
    position: absolute;
    left: 10px;
    top: 20px;
    transform: translateY(-8px);
    opacity: 0;
    visibility: hidden;
    overflow: hidden;

    ${props => props.isOptionsActive && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const WorkCardHeaderOption = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    color: var(--font-primary-color);
    transition: var(--transition);
    cursor: pointer;
    font-size: var(--fs-xs);
    gap: 5px;

    &:hover {
        background-color: var(--primary-color);
    }
`;

export const WorkCardFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0 20px;

    p,
    h3 {
        font-size: var(--fs-xs);
    }
`;
