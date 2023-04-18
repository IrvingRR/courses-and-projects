import { FiEye, FiTrash } from "react-icons/fi";
import { ClassTeacherImage, IconButton, LinkIconButton } from '../../components';

export const ClassListItem = ({ data }) => {
  return (
    <tr>
        {
            data.teacher.name 
            ? <td className='table-classes-teacher'>
                    <ClassTeacherImage image={data.teacher.image} alt={data.teacher.name} gender={data.teacher.gender}/>
                    <p>{ data.teacher.name }</p>
                </td>
            : <td>No teacher yet</td>
        }
        <td>{ data.name }</td>
        <td className="table-classes-description">
            <p>{ data.description }</p>
        </td>
        {/* <td>20 works</td> */}
        <td className="table-actions">
            <LinkIconButton to={`${data.id}`} icon={<FiEye/>}/>
            <IconButton variant='outline' icon={<FiTrash/>}/>
        </td>
    </tr>
  )
}
