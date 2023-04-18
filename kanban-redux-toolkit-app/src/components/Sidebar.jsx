import { SidebarStyled } from "../styled";
import { VerticalNavbar } from "./";
import { useState } from "react";

export const Sidebar = () => {

    const [isActive, setIsActive] = useState(true);

    return (
        <SidebarStyled isActive={isActive}>
            <VerticalNavbar setIsActive={setIsActive} isActive={isActive}/>
        </SidebarStyled>
    )
}
