import styled, { css } from 'styled-components';

export const SidebarStyled = styled.aside`
    background-color: ${({ theme }) => theme.backgroundSecondaryColor};
    color: ${({ theme }) => theme.fontPrimaryColor};
    height: 100%;
    max-width: 200px;
    position: relative;
    transition: var(--transition);
    width: 100%;

    ${props => props.isActive === false && css`
        overflow: hidden;
        visibility: hidden;
        width: 0;
    `}
`;

export const SidebarHeader = styled.header`
    align-items: center;
    display: flex;
    gap: 10px;
    padding: 20px;
    width: 100%;

    h2, svg {
        font-size: var(--fs-l);
    }

    svg {
        color: var(--primary-color);
    }
`;

export const SidebarElements = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
`;

export const SidebarElement = styled.li `
    list-style: none;
    width: 90%;

    align-items: left;
    border-bottom-right-radius: var(--radius-secondary);
    border-top-right-radius: var(--radius-secondary);
    color: ${({ theme }) => theme.fontSecondaryColor};
    display: flex;
    font-weight: 600;
    gap: 5px;
    padding: 10px 20px;
    width: 100%;
    font-size: var(--fs-xs);


    &:not(:first-child):hover {
        background-color: var(--primary-color);
        color: var(--white-color);
        cursor: pointer;
    }

    &:last-child:hover {
        background-color: transparent;
    }

    p {
        color: ${({ theme }) => theme.fontSecondaryColor};
    }
   
`;

export const SidebarElementButton = styled(SidebarElement)`

    button {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--primary-color);
        background-color: transparent;
        font-size: var(--fs-xs);
    }
`;

export const SidebarToggleTheme = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundPrimaryColor};
    display: flex;
    font-size: var(--fs-s);
    gap: 20px;
    justify-content: center;
    margin: auto;
    padding: 15px;
    width: 100%;

    input[type='checkbox'] {
        display: none;

        &:checked ~ label {
            background-color: var(--primary-color);

            span {
                transform: translateX(20px);
            }
        }
    }

    button {
        align-items: center;
        /* border: 1px solid ${({ theme }) => theme.backgroundSecondaryColor};  */
        background-color: ${({ theme }) => theme.backgroundSecondaryColor}; 
        border-radius: var(--radius-secondary);
        cursor: pointer;
        display: flex;
        height: 20px;
        transition: var(--transition);
        width: 40px;

        span {
            background-color: var(--white-color);
            border: 1px solid ${({ theme }) => theme.backgroundThirdColor}; 
            border-radius: 100%;
            display: inline-block;
            height: 15px;
            transition: var(--transition);
            width: 15px;
        }

        ${props => props.mode === 'dark' && css`
            background-color: var(--primary-color);

            span {
                transform: translateX(20px);
            }
        `}
    }
`;

export const SidebarActions = styled.div`
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 90%;

    .toggle-sidebar {
        align-items: center;
        background-color: transparent;
        color: ${({ theme }) => theme.fontSecondaryColor};
        display: flex;
        gap: 10px;
        text-align: left;
    }
`;