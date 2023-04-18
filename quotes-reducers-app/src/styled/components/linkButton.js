import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButtonElement = styled(Link)`
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    color: #fff;
    font-size: var(--fs-s);
    letter-spacing: 1px;

    ${ props => props.variant === 'secondary' && css `
        background-color: ${ props.theme.backgroundSecondary };
        color: ${ props.theme.fontColor };
    ` }
`;