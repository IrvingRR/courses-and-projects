import styled from "styled-components";

export const ContainerPanel = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
`;

export const MainContainerPanel = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContentPanel = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 90vh;
    overflow-y: auto;
`;