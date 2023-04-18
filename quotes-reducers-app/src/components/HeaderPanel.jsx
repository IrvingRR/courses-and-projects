import { useContext } from "react";
import {  MdOutlineChevronRight, MdOutlineChevronLeft, MdLogout } from "react-icons/md";
import { SessionContext } from "../contexts";
import { HeaderElement } from "../styled/components";
import { IconButton } from "./IconButton";

export const HeaderPanel = ({ handleToggleElement, isVisible }) => {

  const { sessionState, logout } = useContext(SessionContext);
  const { user } = sessionState;

  return (
    <HeaderElement>
        <IconButton variant='outline-gray' onClick={ handleToggleElement }>
            { isVisible ?  <MdOutlineChevronLeft/> : <MdOutlineChevronRight/>}
        </IconButton>
        <div className="flex">
            <h3>Hi!, <span>{ user.name }</span></h3>
            <img src={ user.image } alt={ user.name } />
            <IconButton variant='transparent' onClick={ logout }>
                <MdLogout/>
            </IconButton>
        </div>
    </HeaderElement>
  )
}
 