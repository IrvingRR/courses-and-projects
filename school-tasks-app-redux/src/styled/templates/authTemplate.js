import styled from "styled-components";

export const AuthTemplateContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    animation: fadeInDown 0.3s linear;

    h2 {
        font-size: var(--fs-xl);
    }

    p {
        width: 50%;
        text-align: center;
        font-size: var(--fs-s);
        line-height: 23px;
    }

    .group-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const AuthLogo = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {  
        font-size: 50px;
    }
`;