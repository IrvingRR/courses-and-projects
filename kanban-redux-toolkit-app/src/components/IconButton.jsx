import { IconButtonStyled } from "../styled";

export const IconButton = ({ icon, ...props }) => {
  return (
    <IconButtonStyled {...props}>
        { icon }
    </IconButtonStyled>
  )
}
