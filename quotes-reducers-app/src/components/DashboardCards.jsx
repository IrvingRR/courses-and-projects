import { DashboardCardsElement } from "../styled";
import { MdCalendarMonth, MdOutlinePeopleAlt, MdPets, MdOutlineStickyNote2 } from "react-icons/md";
import { DashboardCard } from "./DashboardCard";

export const DashboardCards = ({ data }) => {

  const { users, appointments, notes, patients } = data;

  const veterinarians = users.filter(user => user.role === 'Veterinarian');

  return (
    <DashboardCardsElement>
        <DashboardCard title='Appointment' icon={<MdCalendarMonth/>} amount={appointments.length}/>
        <DashboardCard title='Veterinarians' icon={<MdOutlinePeopleAlt/>} amount={veterinarians.length}/>
        <DashboardCard title='Patients' icon={<MdPets/>} amount={patients.length}/>
        <DashboardCard title='Notes' icon={<MdOutlineStickyNote2/>} amount={notes.length}/>
    </DashboardCardsElement>
  )
}
