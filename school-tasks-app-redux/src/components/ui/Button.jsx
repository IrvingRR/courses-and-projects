import { ButtonStyled } from "../../styled/ui/button";

export const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled { ...props }>{ children }</ButtonStyled>
  );
};