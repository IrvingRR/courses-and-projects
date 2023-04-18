import styled from "styled-components";

export const ListStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    height: 600px;
    overflow: auto;

    @media screen and (max-width: 1500px) {
        height: 350px;
    }
`;