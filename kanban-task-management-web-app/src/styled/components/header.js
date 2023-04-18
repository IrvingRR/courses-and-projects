import styled, {css} from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: ${({theme}) => theme.backgroundSecondaryColor};
    color: ${({theme}) => theme.fontPrimaryColor};

    .board-header-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
    }
    
`;

export const HeaderOptions = styled.ul`
    width: 200px;
    background-color: ${({theme}) => theme.backgroundSecondaryColor};
    position: absolute;
    right: 0;
    transform: translateY(50px);
    border-radius: var(--radius-primary);
    transition: var(--transition);
    
    ${props => props.isActive === false && css`
        transform: translateY(-5px);
        opacity: 0;
        visibility: hidden;
    `}
`;

export const HeaderOption = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);
    cursor: pointer;
    font-size: var(--fs-sx);
    border-radius: var(--radius-primary);

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;