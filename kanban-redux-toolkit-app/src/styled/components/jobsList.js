import styled, {css} from 'styled-components';

export const JobsStyled = styled.div`
    width: 230px;
    height: 100%;
    border-right: 1px solid var(--border-color);
    position: relative;
    transition: var(--transition);
    background-color: var(--white-color);
`;

export const JobsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-bottom: 1px solid var(--border-color);
`;

export const JobsHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
`;

export const JobsInputSearch = styled.input`
    width: 100%;
    height: 0;
    border-color: var(--border-color);
    padding: 0 20px;
    border-radius: var(--radius);
    font-size: var(--fs-s);
    color: var(--font-primary-color);
    transform: translateY(-10px);
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;

    &::placeholder {
        font-size: var(--fs-xs);
    }

    ${props => props.isActive && css`
        transform: translateY(0);
        height: 40px;
        padding: 10px 20px;
        opacity: 1;
        visibility: visible;
        
    `}
`;

export const JobsHeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const JobsBody = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
        width: 80%;
        justify-content: center;
        position: absolute;
        bottom: 20px;
    }

    .jobs-list-message {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 20px;
        font-size: var(--fs-xs);
        font-weight: bold;
    }
`;

export const JobsElements = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
