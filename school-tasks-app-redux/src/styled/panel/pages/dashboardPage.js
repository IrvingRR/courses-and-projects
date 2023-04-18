import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`;

export const DashboardHeader = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: var(--fs-l);
    }
`;

export const DashboardDataCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
`;

export const DashboardDataCard = styled.div`
    width: 250px;
    height: 250px;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background-color: var(--background-secondary-color);

    svg {
        font-size: var(--fs-xl);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        color: var(--primary-color);
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        font-size: var(--fs-m);
    }

    p {
        font-size: var(--fs-xs);
        line-height: 20px;
        text-align: center;
        color: var(--font-secondary-color);
    }

    span {
        color: var(--font-primary-color);
    }
`;