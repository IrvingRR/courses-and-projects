import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarElement = styled.nav`
    align-items: center;
    background-color: #fff;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    padding: 10px 32px;
    width: 100%;
`;

export const Logo = styled(Link)`
    align-items: center;
    color: #333;
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const Elements = styled.ul`
    align-items: center;
    display: flex;
    gap: 10px;
`;

export const ElementsItem = styled.li`
    align-items: center;
    display: flex;
    gap: 5px;
`;

export const Image = styled.img`
    border-radius: 100%;
    height: 30px;
    object-fit: cover;
    width: 30px;
`;

export const IconButton = styled.button`
    align-items: center;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 30px;
    justify-content: center;
    outline: none;
    position: relative;
    width: 30px;

    svg {
        transition: 0.3s ease;
    }

    span {
        align-items: center;
        background: var(--danger-color);
        border-radius: 100%;
        color: #fff;
        display: inline-flex;
        font-size: 10px;
        height: 18px;
        justify-content: center;
        padding: 2px;
        position: absolute;
        right: -5px;
        top: -9px;
        width: 18px;
    }

    &:hover { 
        svg {
            transform: translateY(-1px);
            color: var(--danger-color);
        }
    }
`;