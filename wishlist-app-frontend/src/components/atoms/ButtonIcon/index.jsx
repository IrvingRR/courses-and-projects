import { ButtonIconStyled } from './styles';

export const ButtonIcon = ({ icon, ...props }) => {
  return (
    <ButtonIconStyled { ...props }>
        { icon }
    </ButtonIconStyled>
  )
}