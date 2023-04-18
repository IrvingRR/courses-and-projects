import { ContainerStyled } from './styles';

export const Container = ({ children, ...props }) => {
  return (
    <ContainerStyled { ...props }>
        { children }
    </ContainerStyled>
  )
}