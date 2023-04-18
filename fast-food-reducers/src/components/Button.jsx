import { ButtonElement } from "../style-components/button.styles";

export const Button = ({ children, ...props }) => {
  return (
    <ButtonElement { ...props }>
        { children }
    </ButtonElement>
  )
}
