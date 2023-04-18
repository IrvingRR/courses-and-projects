import { IconButtonElement } from "../styled";

export const IconButton = ({ children, ...props }) => {
  return (
    <IconButtonElement { ...props }>
        { children }
    </IconButtonElement>
  )
}
