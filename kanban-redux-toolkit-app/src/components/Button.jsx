import { ButtonStyled } from "../styled";

export const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
        {children}
    </ButtonStyled>
  )
}
