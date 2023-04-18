import styled, {css} from 'styled-components';

export const IconDropdownStyled = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--font-primary-color);
    transition: var(--transition);
    border-radius: var(--radius);
    position: relative;
    
    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    ${props => props.variant === 'outline' && css`
        background-color: transparent;
        border-color: var(--primary-color);

        &:hover {
            background-color: transparent;
            border-color: var(--primary-color-hover);
        }

        &:active {
            border-color: var(--primary-color);
        }
    `}

`;

export const IconDropdownOptions = styled.ul`
    width: 150px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 33px;
    background-color: var(--background-secondary-color);
    z-index: 99;
    transition: var(--transition);
    border-radius: var(--radius);
    border-bottom: 1px solid var(--background-third-color);
    overflow: auto;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;

    p {
        padding: 10px 20px;
    }

    ${props => props.isActiveOptions && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const IconDropdownOption = styled.li`
    width: 100%;
    padding: 10px 20px;
    transition: var(--transition);
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-xs);
    
    &:hover {
        background-color: var(--background-third-color);
    }
`;