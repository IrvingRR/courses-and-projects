import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    height: 80vh;
    
    h2 {
        font-size: var(--fs-xl-3);
        color: var(--primary-color);
    }

    p {
        font-size: var(--fs-m-3);
    }

`;