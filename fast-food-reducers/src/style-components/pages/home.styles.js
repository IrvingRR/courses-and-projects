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
        color: var(--primary-color);
        font-size: 25px;
        border: 2px inset var(--primary-color);
        padding: 5px 20px;
        border-radius: var(--radius);
    }

    span {
        color: var(--font-light-color);
    }

`;

export const Box = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`;