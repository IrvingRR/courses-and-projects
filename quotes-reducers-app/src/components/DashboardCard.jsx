import { DashboardCardElement, DashboardCardHeader } from '../styled';

export const DashboardCard = ({ title, icon, amount }) => {
  return (
    <DashboardCardElement>
        <DashboardCardHeader>
            { icon }
            <h4>{ title }</h4>
        </DashboardCardHeader>
        <h3>{ amount }</h3>
    </DashboardCardElement>
  )
}
