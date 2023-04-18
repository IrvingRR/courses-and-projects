import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
`;

export const Button = styled.button`
    width: 35px;
    height: 35px;
    font-size: 20px;
    padding: 2px;
    border-radius: var(--radius);
    background: var(--primary-gradient-color);
    color: var(--font-color);
`;

export const Results = styled.ul`
    width: 100%;
    background-color: var(--dark-color);
    border-radius: var(--radius);
    transition: var(--transition);
    position: absolute;
    top: 40px;
    border-bottom: 1px solid var(--primary-color);
    max-height: 250px;
    overflow: auto;
    animation: show-from-up-to-down 0.5s ease;  
`;

export const ResultItem = styled(Link)`
    width: 100%;
    height: 30px;
    padding: 10px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: var(--primary-color);
    }
`;