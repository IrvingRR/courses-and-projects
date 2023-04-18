import { FiBook, FiCodesandbox, FiLogOut, FiPieChart, FiSettings, FiUser } from "react-icons/fi";
import { SidebarActions, SidebarContainer, SidebarLinkElement, SidebarLinkItem, SidebarLinks, SidebarLogo } from "../../styled/panel";
import { IconButton } from '../ui';
import { useDispatch } from "react-redux";
import { startLogoutThunk } from "../../redux/auth";

export const Sidebar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogoutThunk());
    };

  return (
    <SidebarContainer>
        <SidebarLogo>
            <FiCodesandbox/>
        </SidebarLogo>
        <SidebarLinks>
            <SidebarLinkElement>
                <SidebarLinkItem to='dashboard' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <FiPieChart/>
                </SidebarLinkItem>
            </SidebarLinkElement>

            <SidebarLinkElement>
                <SidebarLinkItem to='classes' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <FiBook/>
                </SidebarLinkItem>
            </SidebarLinkElement>

            <SidebarLinkElement>
                <SidebarLinkItem to='teachers' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <FiUser/>
                </SidebarLinkItem>
            </SidebarLinkElement>

            <SidebarLinkElement>
                <SidebarLinkItem to='settings' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <FiSettings/>
                </SidebarLinkItem>
            </SidebarLinkElement>
        </SidebarLinks>

        <SidebarActions>
            <IconButton icon={<FiLogOut/>} onClick={onLogout}/>
        </SidebarActions>
    </SidebarContainer>
  )
}
