import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarStyled = styled.aside`
    width: 80px;
    height: 100vh;
    background: var(--dark-color);
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 20px;

    ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
    }
    
    li {
        list-style: none;
    }
`;

export const Logo = styled(Link)`

    font-size: var(--fs-l-2);
    font-weight: bold;
    letter-spacing: 2px;
    color: var(--primary-color);

    span {
        color: var(--white-color);
    }
`;