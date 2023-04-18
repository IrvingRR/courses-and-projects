import { ContainerPanel, MainContainerPanel, ContentPanel } from "../styled";
import { HeaderPanel, Sidebar } from "../components";
import { useShowElements } from "../hooks";
import { Outlet } from "react-router-dom";

export const PanelTemplate = () => {

  const { handleToggleElement, isVisible } = useShowElements(true);
  
  return (
    <ContainerPanel>
        <Sidebar isVisible={isVisible}/>
        <MainContainerPanel>
          <HeaderPanel handleToggleElement={handleToggleElement} isVisible={isVisible}/>
          <ContentPanel>
            <Outlet/>
          </ContentPanel>
        </MainContainerPanel>
    </ContainerPanel>
  );
};