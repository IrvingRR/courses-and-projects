import { ClassesCard, ClassesCardActions, ClassesCardBody, ClassesCardFooter, ClassesCardHeader } from "../../styled";
import { ClassTeacherImage } from "./ClassTeacherImage";
import { IconButton } from '../ui';
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { startDeleteClassThunk } from "../../redux/classes/classesThunks";

const imageURL = 'https://images.unsplash.com/photo-1544830281-1d5169d6b2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

export const ClassCard = ({ data }) => {

    const dispatch = useDispatch();

    const onDeleteClass = () => {
        dispatch(startDeleteClassThunk(data.id));
    };

  return (
    <ClassesCard to={data.id}>
        <ClassesCardHeader className='classes-card-header'>
            <img src={ data.image || imageURL }/>
        </ClassesCardHeader>
        <ClassesCardBody>
            <h3>{ data.name }</h3>
            <p>{ data.description }</p>
        </ClassesCardBody>
        {   data.teacher.name &&
            <ClassesCardFooter>
                <ClassTeacherImage image={data.teacher.image} alt={data.teacher.name} gender={data.teacher.gender}/>
                <div className="classes-card-footer-information">
                    <p>{ data.teacher.name }</p>
                </div>
            </ClassesCardFooter>
        }
        {/* <ClassesCardActions>
            <IconButton icon={<FiEdit/>}/>
            <IconButton icon={<FiTrash/>} variant='outline' onClick={onDeleteClass}/>
        </ClassesCardActions> */}
    </ClassesCard>
  );
};