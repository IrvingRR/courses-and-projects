import styled, { css } from 'styled-components';

export const SidebarElement = styled.aside`
    width: 100%;
    max-width: 250px;
    width: 250px;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.fontColor};
    position: relative;
    transition: var(--transition);
    /* box-shadow: ${({ theme }) => theme.shadowDownRight}; */
    border-right: 1px solid ${({theme}) => theme.backgroundThird};

    .toggle-mode{
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin: auto;
    }

    ${props => props.isVisible === false && css`
        width: 0;
        overflow: hidden;
    `}
`;

export const SidebarHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    position: relative;
    font-size: var(--fs-s);
    opacity: 1;

    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }

    .sidebar-header-user-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: var(--fs-s);

        span {
            color: #ccc;
        }
    }

`;

export const SidebarLinks = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10px;
    gap: 10px;

    &:last-child {
        border-top: 1px solid ${({ theme }) => theme.backgroundColor};
    }

`;

export const SidebarLink = styled.li`
    list-style: none;

    a {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${({ theme }) => theme.fontColor};
        border-radius: var(--radius);
        font-size: var(--fs-s);

        &.active {
            background-color: var(--primary-color);
            color: #fff;
        }

        &:hover {
            background-color: var(--primary-color);
            color: #fff;
        }
    }
`;