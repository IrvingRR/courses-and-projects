import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding: var(--padding-container);
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    justify-content: center;
    align-items: center;
    animation: show-from-up-to-down 0.5s ease; 

    form { animation: show-from-up-to-down 0.5s ease; }

    a { animation: show-from-up-to-down 0.3s ease; }

    input { animation: show-from-up-to-down 0.4s ease; }

    button { animation: show-from-up-to-down 0.5s ease; }
`;