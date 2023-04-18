import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    animation: show-from-up 0.3s linear;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    transition: var(--transition);
    width: 100%;
    
    h2 {
        font-size: 25px;
    }
`;
