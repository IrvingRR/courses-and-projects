import styled from 'styled-components';

export const HeaderElement = styled.header`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.backgroundSecondary};
    color: ${({theme}) => theme.fontColor};
    /* box-shadow: ${({ theme }) => theme.shadowDown}; */
    border-bottom: 1px solid ${({theme}) => theme.backgroundThird};

    .flex {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }

    h3 {
        font-size: var(--fs-s);
        color: var(--primary-color);
        
        span {
            font-weight: normal;
            color: ${({theme}) => theme.fontColor};
        }
    }
`;