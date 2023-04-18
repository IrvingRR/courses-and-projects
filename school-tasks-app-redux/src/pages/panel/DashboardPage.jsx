import { DashboardContainer, DashboardDataCard, DashboardDataCards } from "../../styled/panel/pages/dashboardPage";
import { FiBook, FiFile, FiUsers } from "react-icons/fi";

export const DashboardPage = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <DashboardDataCards>

        <DashboardDataCard>
          <FiBook/>
          <h3>Classes</h3>
          <span>7</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit?</p>
        </DashboardDataCard>

        <DashboardDataCard>
          <FiFile/>
          <h3>Works</h3>
          <span>12</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit?</p>
        </DashboardDataCard>

        <DashboardDataCard>
          <FiUsers/>
          <h3>Teachers</h3>
          <span>7</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit?</p>
        </DashboardDataCard>

      </DashboardDataCards>
    </DashboardContainer>
  );
};