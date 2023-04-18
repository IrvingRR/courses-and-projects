import styled, {css} from 'styled-components';

export const DropdownContainer = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background-color: var(--background-secondary-color);
    color: var(--font-primary-color);
    font-size: var(--fs-xs);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    position: relative;

    ${props => props.variant === 'outline' && css`
        background-color: transparent;
        border: 1px solid var(--background-secondary-color);
    `}

    ${props => props.variant === 'transparent' && css`
        background-color: transparent;
        padding: 0;

        &:hover {
            background-color: transparent;
        }
    `}

    ${props => props.size === 'small' && css`
        width: 250px;
    `}
`;

export const DropdownOptions = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 43px;
    background-color: var(--background-secondary-color);
    z-index: 99;
    transition: var(--transition);
    border-radius: var(--radius);
    border-bottom: 1px solid var(--background-third-color);
    overflow: auto;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;

    ${props => props.isActiveOptions && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}

    p {
        width: 100%;
        padding: 10px 20px;
    }
`;

export const DropdownOption = styled.li`
    width: 100%;
    padding: 10px 20px;
    transition: var(--transition);
    list-style: none;
    
    &:hover {
        background-color: var(--background-third-color);
    }
`;