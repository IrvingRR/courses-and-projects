import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const JobsHeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px 0 20px;
    border-bottom: 1px solid var(--border-color);
    position: relative;
`;

export const JobsHeaderContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const JobsHeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const JobsHeaderLinks = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const JobsHeaderLink = styled(NavLink)`
    padding: 10px 0;
    color: var(--font-secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: 600;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: var(--primary-color);
        border-radius: 80px;
        transition: var(--transition);
    }

    &:hover,
    &.active {
        color: var(--font-primary-color);
    }

    &:hover::before,
    &.active::before {
        border-bottom-color: var(--primary-color);
        width: 40%;
    }
`;