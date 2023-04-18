import styled, {css} from "styled-components";
import { FieldInput } from '../../../styled';

export const TeachersHeader = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TeachersHeaderActions = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const TeachersHeaderInput = styled(FieldInput)`
    width: 200px;
    padding: 10px 20px;
    height: 30px;
    border: 1px solid var(--background-secondary-color);
`;

export const TeachersActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

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