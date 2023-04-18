import { LinkIconStyled } from './styles';

export const LinkIcon = ({ icon, ...props }) => {
  return (
    <LinkIconStyled { ...props }>
        { icon }
    </LinkIconStyled>
  )
}