import { MdOutlinePets } from "react-icons/md";
import { NavbarAuthElement, Logo } from "../styled";
import { ToggleMode } from "./ToggleMode";

export const NavbarAuth = () => {

  return (
    <NavbarAuthElement>
      <Logo to='/'>
        <MdOutlinePets/>
        MyPet
      </Logo>
      <ToggleMode/>
    </NavbarAuthElement>
  )
}
