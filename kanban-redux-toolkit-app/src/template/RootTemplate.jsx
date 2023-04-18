import { Outlet } from 'react-router-dom';
import { RootTemplateContainer, RootTemplateMainContent } from '../styled';
import { Sidebar } from '../components';

export const RootTemplate = () => {
  return (
    <RootTemplateContainer>
        <Sidebar/>
        <RootTemplateMainContent>
          <Outlet/>
        </RootTemplateMainContent>
    </RootTemplateContainer>
  )
}
