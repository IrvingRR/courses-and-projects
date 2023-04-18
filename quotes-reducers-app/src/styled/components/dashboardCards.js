import styled from 'styled-components';

export const DashboardCardsElement = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
`;

export const DashboardCardElement = styled.div`
    width: 250px;
    border-radius: var(--radius);
    background-color: ${({ theme }) => theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    padding: 15px 20px;
    flex: 1;
    /* box-shadow: ${({ theme }) => theme.shadowDown}; */
    border: 1px solid ${({theme}) => theme.backgroundThird};

    h3 {
        font-size: 20px;
    }
`;

export const DashboardCardHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg {
        font-size: var(--fs-l);
        color: var(--primary-color);

       
    }
`;
