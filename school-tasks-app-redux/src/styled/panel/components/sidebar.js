import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    width: 100%;
    max-width: 60px;
    height: 100vh;
    background-color: var(--background-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    gap: 20px;
`;

export const SidebarLogo = styled(Link)`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: var(--fs-xl);
        color: var(--font-primary-color);
    }
`;

export const SidebarLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SidebarLinkElement = styled.li`
    width: 100%;
    height: 30px;
    list-style: none;
`;

export const SidebarLinkItem = styled(NavLink)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-third-color);
    font-size: 18px;
    padding: 10px;

    &:hover {
        color: var(--font-primary-color);
    }

    &.active {
        color: var(--font-primary-color);
    }

`;

export const SidebarActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
