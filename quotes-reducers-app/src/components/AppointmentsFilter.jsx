import { useContext } from "react";
import { AppointmentsContext } from "../contexts";
import { FilterAppointment } from "../styled";

export const AppointmentsFilter = ({ label, term, icon, ...props }) => {

  const { filterAppointments } = useContext(AppointmentsContext);

  return (
    <FilterAppointment {...props} onClick={() => filterAppointments(label, term)}>
        <input type="radio" id={label.toLowerCase()} name="filter" value={label}></input>
        <label htmlFor={label.toLowerCase()}>
          {icon}
          {label}
        </label>
    </FilterAppointment>
  )
}
