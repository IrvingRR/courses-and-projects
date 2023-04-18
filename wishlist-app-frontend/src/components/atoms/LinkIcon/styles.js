import styled, { css } from 'styled-components';
import { LinkButtonStyled } from '../LinkButton/styles';

export const LinkIconStyled = styled(LinkButtonStyled)`
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1px;

    svg {
        font-size: var(--fs-m-3);
    } 

    &:hover {
        background: var(--primary-gradient-color-hover);
    }

    &:active {
        background: var(--primary-gradient-color);
    }

    /* Secondary button 
    ===============================================*/
    ${ props => props.variant === 'secondary' && css`

        background: var(--secondary-gradient-color);

        &:hover {
            background: var(--secondary-gradient-color-hover);
        }

        &:active {
            background: var(--secondary-gradient-color);
        }
    `}

    /* Third button 
    ===============================================*/
    ${ props => props.variant === 'third' && css`

        background: var(--third-gradient-color);

        &:hover {
            background: var(--third-gradient-color-hover);
        }

        &:active {
            background: var(--third-gradient-color);
        }
    `}

    /* Outline primary button
    ===============================================*/
    ${ props => props.variant === 'outline primary' && css`

        background: transparent;
        border: var(--border-primary);
        color: var(--primary-color);

        &:hover {
            background: var(--primary-color);
            color: var(--font-color);
        }

        &:active {
            background: transparent;
            border: var(--border-primary);
            color: var(--primary-color);
        }
    `}

    /* Outline secondary button
    ===============================================*/
    ${ props => props.variant === 'outline secondary' && css`

        background: transparent;
        border: var(--border-secondary);
        color: var(--secondary-color);

        &:hover {
            background: var(--secondary-color);
            color: var(--font-color);
        }

        &:active {
            background: transparent;
            border: var(--border-secondary);
            color: var(--secondary-color);
        }
    `}

    /* Outline third button
    ===============================================*/
    ${ props => props.variant === 'outline third' && css`

        background: transparent;
        border: var(--border-third);
        color: var(--third-color);

        &:hover {
            background: var(--third-color);
            color: var(--font-color);
        }

        &:active {
            background: transparent;
            border: var(--border-third);
            color: var(--third-color);
        }
    `}
`;