import { useFetchAll } from "../../hooks";
import { DashboardCards, DashboardNotesTable } from '../../components';
import { DashboardHeader } from "../../styled";

export const DashboardPage = () => {

    const { responses, isLoading, error } = useFetchAll([
        fetch("http://localhost:5000/users").then(response => response.json()),
        fetch("http://localhost:5000/appointments").then(response => response.json()),
        fetch("http://localhost:5000/notes").then(response => response.json()),
        fetch("http://localhost:5000/patients").then(response => response.json()),
    ]);

    if (isLoading) return <h2>Loading...</h2>;

    const [users, appointments, notes, patients] = responses;

    return (
        <>
            <DashboardCards data={{ users, appointments, notes, patients }}/>
            <DashboardNotesTable notes={ notes }/>
          
        </>
    )
}
