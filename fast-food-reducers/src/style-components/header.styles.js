import styled from "styled-components";

export const HeaderElement = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${ props => props.theme.background };
    padding: 10px 20px;
`;