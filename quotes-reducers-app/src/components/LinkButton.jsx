import { LinkButtonElement } from "../styled";

export const LinkButton = ({ children, ...props }) => {
  return (
    <LinkButtonElement { ...props }>
        { children }
    </LinkButtonElement>
  )
}
