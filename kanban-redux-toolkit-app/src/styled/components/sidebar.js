import styled, {css} from 'styled-components';

export const SidebarStyled = styled.aside`
    width: 60px;
    height: 100%;
    background-color: var(--background-primary-color);
    display: flex;
    align-items: flex-start;
    transition: var(--transition);

    ${props => props.isActive === false && css`
        width: 70px;
        overflow: hidden;
    `}
`;
