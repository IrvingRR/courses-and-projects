import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding: var(--padding-container);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: show-from-up-to-down 0.5s ease;    

    h1 {
        font-size: var(--fs-xl-3);
        animation: show-from-up-to-down 0.5s ease; 

        span {
            color: var(--primary-color);
        }
    }

    button { 
        animation: show-from-up-to-down 0.9s ease; 
    }
`;