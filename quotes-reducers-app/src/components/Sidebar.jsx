import { useContext } from "react";
import { MdOutlineDashboard, MdCalendarMonth, MdOutlinePeopleAlt, MdPets, MdOutlinePersonOutline, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SessionContext } from "../contexts";
import { SidebarElement, SidebarHeader, SidebarLinks, SidebarLink } from "../styled";
import { ToggleMode } from "./ToggleMode";
const ImagePreview = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const Sidebar = ({ isVisible }) => {

    const { sessionState } = useContext(SessionContext);

    const { user } = sessionState;

  return (
    <SidebarElement isVisible={isVisible}>
        <SidebarHeader>
            <img src={ user.image } alt={ user.name } />
            <div className="sidebar-header-user-info">
                <h3>{ user.name }</h3>
                <span>{ user.role }</span>
            </div>
        </SidebarHeader>

        <SidebarLinks>
            <SidebarLink>
                <NavLink to='dashboard' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <MdOutlineDashboard/>
                    Dashboard
                </NavLink>
            </SidebarLink>

            <SidebarLink>
                <NavLink to='appointments' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <MdCalendarMonth/>
                    Appointments
                </NavLink>
            </SidebarLink>

            <SidebarLink>
                <NavLink to='vets' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <MdOutlinePeopleAlt/>
                    Vets
                </NavLink>
            </SidebarLink>

            <SidebarLink>
                <NavLink to='patients' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <MdPets/>
                    Patients
                </NavLink>
            </SidebarLink>
        </SidebarLinks>

        <SidebarLinks>
            <SidebarLink>
                <NavLink to='profile' className={ ({isActive}) => `${ isActive ? 'active' : '' }` }>
                    <MdOutlinePersonOutline/>
                    Profile
                </NavLink>
            </SidebarLink>

            <SidebarLink>
                <NavLink to='settings'>
                    <MdSettings/>
                    Settings
                </NavLink>
            </SidebarLink>
        </SidebarLinks>

        <ToggleMode className='toggle-mode'/>
    </SidebarElement>
  )
}
