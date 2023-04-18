import styled, {css} from 'styled-components';
import { FieldInput } from '../../ui';

export const WorksHeader = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const WorksHeaderActions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const WorksHeaderToggle = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const WorksHeaderInput = styled(FieldInput)`
    width: 0;
    padding: 0;
    height: 0;
    border: none;
    
    ${props => props.isInputActive && css`
        width: 200px;
        padding: 10px 20px;
        height: 30px;
        border: 1px solid var(--background-secondary-color);
    `}
`;