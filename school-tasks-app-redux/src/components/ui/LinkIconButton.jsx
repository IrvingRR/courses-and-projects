import { LinkIconButtonStyled } from '../../styled';

export const LinkIconButton = ({ icon, ...props }) => {
  return (
    <LinkIconButtonStyled { ...props }>
        { icon }
    </LinkIconButtonStyled>
  )
}
