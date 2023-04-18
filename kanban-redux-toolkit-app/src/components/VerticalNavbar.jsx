import { FiMenu, FiLayers, FiBriefcase, FiUsers, FiBookOpen, FiBell, FiSettings } from "react-icons/fi";
import { VerticalNavbarStyled, Links, LinkElement, UserImage } from '../styled';
import { IconButton } from "./";

const StaticPathImage = 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg';

export const VerticalNavbar = ({ isActive, setIsActive }) => {
  return (
    <VerticalNavbarStyled>
        <IconButton variant='transparent' icon={<FiMenu/>} onClick={() => setIsActive(!isActive)}/>
        <Links>
            <LinkElement to='dashboard' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiLayers/>
            </LinkElement>

            <LinkElement to='jobs' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiBriefcase/>
            </LinkElement>

            <LinkElement to='users' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiUsers/>
            </LinkElement>

            <LinkElement to='teams' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiBookOpen/>
            </LinkElement>

            <LinkElement to='notifications' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiBell/>
            </LinkElement>
            
            <LinkElement to='settings' className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                <FiSettings/>
            </LinkElement>
        </Links>
        <UserImage src={StaticPathImage}/>
    </VerticalNavbarStyled>
  )
}
