import { LinkElement } from "../style-components/linkButton.styles";

export const LinkButton = ({ children, ...props }) => {
  return (
    <LinkElement { ...props }>
        { children }
    </LinkElement>
  )
}
