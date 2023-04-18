import { Outlet } from "react-router-dom";
import { HeaderPanel, SidebarPanel } from "../../components";
import { Container, Main } from "./styles";

export const PanelTemplate = () => {
  return (
    <Container>
        <SidebarPanel/>
        <Main>
            <HeaderPanel/>
            <Outlet/>
        </Main>
    </Container>
  )
}
