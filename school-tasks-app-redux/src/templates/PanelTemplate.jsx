import { Outlet } from "react-router-dom";
import { MainContent, PanelTemplateContainer } from "../styled/templates";
import { Sidebar } from "../components/panel/Sidebar";

export const PanelTemplate = () => {
  return (
    <PanelTemplateContainer>
        <Sidebar/>
        <MainContent>
          <Outlet/>
        </MainContent>
    </PanelTemplateContainer>
  );
};