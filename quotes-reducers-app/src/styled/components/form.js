import styled, {css} from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  h2 {
    font-size: var(--fs-xl);
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  gap: 5px;
  position: relative;

  ${props => props.size === 'small' && css`
    max-width: 300px;
  `}

  svg {
    position: absolute;
    left: 10px;
    font-size: var(--fs-l);
  }
`;

export const Control = styled.input`
  width: 100%;
  height: 45px;
  border-radius: var(--radius);
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.inputsColor};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.backgroundSecondary};

  &:focus {
    background-color: transparent;
    border-color: ${({ theme }) => theme.borderColor};
  }

  ${props => props.variant === 'gradient' && css `
    background-color: ${({ theme }) => theme.backgroundGradient};
    border-color: ${({ theme }) => theme.borderColor};
  `}

  ${props => props.size === 'small' && css`
      height: 32px;
  `}

  ${props => props.icon  && css`
      padding: 10px 30px;
  `}
`;

export const Legend = styled.p`
    width: 100%;
    padding: 0 20px;
    height: 0;
    display: flex;
    align-items: center;
    font-size: var(--fs-s);
    color: var(--danger-color);
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;

    ${ props => props.valid === false && css `
        height: 20px;
        padding: 10px 20px;
        opacity: 1;
        visibility: visible;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    `}
`;