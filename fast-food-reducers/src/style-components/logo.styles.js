import styled, { css } from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    ${ props => props.size === 'small' && css`
        flex-direction: row;
        gap: 5px;

        h3 {
            font-size: var(--fs-s);
        } 

        svg { font-size: 20px; }
    ` }

    span { color: var(--primary-color); }

`;

export const IconWrapper = styled.div`
    align-items: center;
    background-color: ${ props => props.theme.background };
    border-radius: 100%;
    border: 1px solid ${ props => props.theme.borderColor };
    box-shadow: var(--shadow-down);
    display: flex;
    height: 100px;
    justify-content: center;
    width: 100px;

    svg { font-size: 50px; }

    ${ props => props.size === 'small' && css`
        width: 40px;
        height: 40px;        

        svg { font-size: 20px; }
    ` }
`;