import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavbarAuthElement = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 60px;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 500px) {
        padding: 15px 20px;
    }
`;

export const Logo = styled(Link)`
    font-size: var(--fs-m);
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.fontColor};

    &:hover {
        color: var(--primary-color);
    }
`;