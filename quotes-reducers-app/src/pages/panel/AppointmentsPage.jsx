import { MdList, MdCalendarMonth, MdOutlineSearch, MdDashboard } from "react-icons/md";
import { ContainerAppointments, Title, HeaderAppointments } from '../../styled';
import { IconButton, Input, Button, AppointmentsFilters, AppointmentsTable } from '../../components';
import { AppointmentsProvider } from "../../contexts";

export const AppointmentsPage = () => {

  const [search, setSearch] = useState('');

  return (
    <AppointmentsProvider>
      <ContainerAppointments>
        <Title>
          <MdCalendarMonth/>
          <h2>Appointments</h2>
        </Title>
        <HeaderAppointments>
          <Input size='small' type='text' name='search' placeholder='Search' icon={<MdOutlineSearch/>}/>
          <div className="flex">
            <IconButton variant='outline-gray'>
              <MdList/>
            </IconButton>
            <IconButton variant='outline-gray'>
              <MdDashboard/>
            </IconButton>
            <Button>New appointment</Button>
          </div>
        </HeaderAppointments>
        <AppointmentsFilters/>
        <AppointmentsTable/>
      </ContainerAppointments>
    </AppointmentsProvider>
  )
}
