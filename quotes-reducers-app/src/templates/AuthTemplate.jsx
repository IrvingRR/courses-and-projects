import { Outlet } from "react-router-dom";
import { NavbarAuth } from "../components";
import { ContainerAuth } from "../styled";

export const AuthTemplate = () => {
  return (
    <ContainerAuth>
      <NavbarAuth/>
      <Outlet/>
    </ContainerAuth>
  )
}
