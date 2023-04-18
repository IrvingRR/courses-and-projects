import { LinkButtonStyled } from './styles';

export const LinkButton = ({ children, ...props }) => {
  return (
    <LinkButtonStyled { ...props }>
        { children }
    </LinkButtonStyled>
  )
}