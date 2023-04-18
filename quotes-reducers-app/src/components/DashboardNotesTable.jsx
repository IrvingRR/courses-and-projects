import {  MdInfoOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdWarningAmber, MdErrorOutline } from "react-icons/md";
import { IconButton, Table } from './';

export const DashboardNotesTable = ({ notes }) => {
  return (
    <Table>
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>User</th>
                <th>Role</th>
                <th>Title</th>
                <th>Note</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            { notes.length > 0 && notes.map(note => (
                <tr key={ note.id }>
                    <td>{ note.id }</td>
                    <td>
                        <img src={ note.image } alt={ note.user } />
                    </td>
                    <td>{ note.user }</td>
                    <td>{ note.role }</td>
                    <td>{ note.title }</td>
                    <td className="table-cell-long-text">{ note.note }</td>
                    <td>
                        <div className={`table-cell-flex table-cell-status table-cell-${note.type.toLowerCase()}`}>
                                { note.type === 'Informative' && <MdInfoOutline/> }
                                { note.type === 'Warning' && <MdWarningAmber/>}
                                { note.type === 'Urgent' && <MdErrorOutline/>}
                                { note.type }
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
                
            }
            
        </tbody>
        </table>
        
    </Table>
  )
}
