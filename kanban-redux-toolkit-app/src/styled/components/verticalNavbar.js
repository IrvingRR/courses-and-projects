import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const VerticalNavbarStyled = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--border-color);
    align-items: center;
    background-color: var(--white-color);
    padding: 20px;
    position: relative;
`;

export const Links = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding-top: 60px;
`;

export const LinkElement = styled(NavLink)`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--font-primary-color);
    border-radius: var(--radius);
    font-size: var(--fs-m);

    &:hover {
        color: var(--primary-color);
    }

    &.active {
        color: var(--primary-color);
    }


`;

export const UserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    bottom: 20px;
`;
