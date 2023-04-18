import styled from 'styled-components';

export const ToggleModeButton = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.backgroundGradient};
    border: 1px solid ${({ theme }) => theme.inputsColor};
    font-size: var(--fs-m);
    overflow: hidden;

    span { transition: var(--transition); }

    &:hover {
        color: var(--primary-color);
    }
`;