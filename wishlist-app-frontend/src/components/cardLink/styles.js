import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLinkStyled = styled(Link)`
    width: 230px;
    padding: var(--padding-component);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--dark-color);
    color: var(--font-color);
    align-items: center;
    transition: var(--transition);

    svg {
        font-size: 30px;
    }

    h3, p {
        font-size: var(--fs-s-3);
    }

    &:hover {
        transform: translateY(-5px);
    }
`;