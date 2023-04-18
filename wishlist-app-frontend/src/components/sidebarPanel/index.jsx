import { TiHomeOutline, TiClipboard, TiThList, TiUserOutline } from "react-icons/ti";
import { LinkIcon } from "../atoms";
import { Logo, SidebarStyled } from "./styles";

export const SidebarPanel = () => {
  return (
    <SidebarStyled>
        <Logo to='/panel'>
            W<span>L</span>
        </Logo>
        <ul>
            <li>
                <LinkIcon to='/panel' variant='outline primary' icon={ <TiHomeOutline/> } title='Home'/>
            </li>

            <li>
                <LinkIcon to='/wishlists' variant='outline primary' icon={ <TiClipboard/> } title='Wishlists'/>
            </li>

            <li>
                <LinkIcon to='/categories' variant='outline primary' icon={ <TiThList/> } title='Categories'/>
            </li>

            <li>
                <LinkIcon to='/profile' variant='outline primary' icon={ <TiUserOutline/> } title='Profile'/>
            </li>
        </ul>
    </SidebarStyled>
  )
}
