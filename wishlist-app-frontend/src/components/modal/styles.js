import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background-color: var(--backgroud-color);
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  transition: var(--transition);
  width: 100%;
  z-index: 999;
  transform: translateY(-50px);
  opacity: 0;
  visibility: hidden;

  ${ props => props.isOpen === true && css`
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  ` }
`;

export const Card = styled.div`
  border: 1px solid var(--dark-color);
  max-width: 600px;
  width: 100%;
  border-radius: var(--radius);
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;

  h3 { font-size: var(--fs-l-2); }
`;

export const Content = styled.div`
  width: 100%;
  padding: ${ props => props.padding ? props.padding : 'var(--padding-component)' };
`;

export const Button = styled.button`
  align-items: center;
  color: var(--font-color);
  display: flex;
  font-size: var(--fs-l-1);
  height: 30px;
  justify-content: center;
  width: 30px;
  background-color: transparent;
  border: none;
  font-weight: bold;
`;
