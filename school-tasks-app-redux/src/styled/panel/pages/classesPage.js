import styled, {css} from 'styled-components';
import { FieldInput } from '../../ui';

export const ClassesHeader = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ClassesHeaderActions = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ClassesGroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    a:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    a:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    a.active {
        background-color: var(--primary-color);
    }
`;

export const ClassesHeaderInput = styled(FieldInput)`
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

export const ClassesFilters = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 20px;

    .classes-filters-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        
    }
    
    h3 {
        width: 200px;
        font-size: var(--fs-xs);
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            color: var(--font-secondary-color);
        }
    }
`;

export const ClassesActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
`;