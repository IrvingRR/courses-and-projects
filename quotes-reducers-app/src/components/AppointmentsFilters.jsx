import { MdList, MdPendingActions, MdFreeCancellation, MdOutlineHome, MdCheckCircleOutline, MdOutlineLocalHospital } from "react-icons/md";
import { FiltersAppointments } from "../styled";
import { AppointmentsFilter } from './AppointmentsFilter';

export const AppointmentsFilters = ({ filterAppointments }) => {

  return (
    <FiltersAppointments>

        <AppointmentsFilter label='All' term='status' icon={<MdList/>} filterAppointments={filterAppointments}/>

        <AppointmentsFilter label='Completed' term='status' icon={<MdCheckCircleOutline/>} filterAppointments={filterAppointments}/>

        <AppointmentsFilter label='Pending' term='status' icon={<MdPendingActions/>} filterAppointments={filterAppointments}/>

        <AppointmentsFilter label='Canceled' term='status' icon={<MdFreeCancellation/>} filterAppointments={filterAppointments}/>

        <AppointmentsFilter label='At home' term='place' icon={<MdOutlineHome/>} filterAppointments={filterAppointments}/>

        <AppointmentsFilter label='At clinic' term='place' icon={<MdOutlineLocalHospital/>} filterAppointments={filterAppointments}/>

    </FiltersAppointments>
  )
}
