import styled from 'styled-components';

export const ContainerAppointments = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: ${({theme}) => theme.backgroundSecondary};; */
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-l);

    h2 {
        font-size: 20px;
    }

    svg {
        font-size: var(--fs-xl);
        color: var(--primary-color);
    }
`;

export const HeaderAppointments = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;

    .flex {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;