import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const JobElementStyled = styled(NavLink)`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 3px solid transparent;
    color: var(--font-primary-color);
    text-decoration: none;
    
    p, h3 {
        font-size: var(--fs-xs);
    }

    p {
        color: var(--font-secondary-color);
    }

    &:hover {
        border-right-color: var(--primary-color);
        background-color: var(--background-secondary-color);
    }

    &.active {
        border-right-color: var(--primary-color);
        background-color: var(--background-secondary-color);
    }
`;