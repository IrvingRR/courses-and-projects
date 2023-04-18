import { Outlet } from "react-router-dom";
import { Navbar, ShoppingCart } from "../components";
import { Container, MainContent } from "./StoreTemplate.styles";
import { useShowElement } from '../../hooks';

export const StoreTemplate = () => {

  const { isActivated, showElement, hiddeElement } = useShowElement();

  return (
    <>
      <Navbar showCart={showElement}/>
      <Container breakpoint='fluid' display="flex" alignItems='center' justifyContent="space-between" flexWrap="wrap"  p='0'>
          <MainContent>
            <Outlet/>
          </MainContent>
          <ShoppingCart isActivated={isActivated} hiddeCart={hiddeElement}>Cart</ShoppingCart>
      </Container>
    </>
  )
}
