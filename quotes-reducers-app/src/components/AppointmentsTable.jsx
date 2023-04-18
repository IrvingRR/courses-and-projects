import { useContext } from "react";
import { MdPendingActions, MdFreeCancellation, MdOutlineHome, MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { AppointmentsContext } from "../contexts";
import { Table, IconButton } from './';

export const AppointmentsTable = () => {

    const { appointmentsState } = useContext(AppointmentsContext);

    return (
        <Table>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Animal</th>
                        <th>Race</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentsState.data.length > 0
                        ? appointmentsState.data.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.type}</td>
                                <td>{appointment.place}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.animal}</td>
                                <td>{appointment.race}</td>
                                <td>
                                    <div className={`table-cell-flex table-cell-status table-cell-${appointment.status.toLowerCase()}`}>
                                            { appointment.status.toLowerCase() === 'completed' && <MdCheckCircleOutline/> }
                                            { appointment.status.toLowerCase() === 'pending' && <MdPendingActions/>}
                                            { appointment.status.toLowerCase() === 'canceled' && <MdFreeCancellation/>}
                                            { appointment.status.toLowerCase() === 'at home' && <MdOutlineHome/>}
                                            { appointment.status }
                                    </div>
                                </td>
                                <td>
                                <div className="table-cell-flex">
                                    <IconButton>
                                        <MdOutlineRemoveRedEye/>
                                    </IconButton>

                                    <IconButton variant='danger'>
                                        <MdDeleteOutline/>
                                    </IconButton>
                                </div>
                                </td>
                            </tr>
                        ))
                        :   <tr>
                                <td>No records</td>
                            </tr>
                    }
                </tbody>
            </table>
        </Table>
    )
}
