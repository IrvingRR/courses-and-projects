import { IoFastFoodOutline } from "react-icons/io5";
import { Container, IconWrapper } from '../style-components/logo.styles';

export const Logo = ({ size }) => {
  return (
    <Container size={ size }>
        <IconWrapper size={ size }>
            <IoFastFoodOutline/>
        </IconWrapper>
        <h3>Fast<span>Food</span></h3>
    </Container>
  )
}
