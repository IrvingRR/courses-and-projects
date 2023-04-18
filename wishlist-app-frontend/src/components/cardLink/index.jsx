import { CardLinkStyled } from "./styles";

export const CardLink = ({ children, ...props }) => {
  return (
    <CardLinkStyled { ...props }>
      {children }
    </CardLinkStyled>
  )
}
