import { FiEdit, FiTrash } from 'react-icons/fi';
import { TeacherCard, TeachersCardsContainer, TeachersLegend, TeacherCardActions } from '../../styled';
import { IconButton, Modal } from '../ui';
import { useModal } from '../../hooks/useModal';
import { EditTeacherForm } from './EditTeacherForm';

const userURL = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60';

const teachers = [1,2,3,4,5,6,7,8,9,10];

export const TeachersCards = () => {

    const {isOpenModal, handleOpenModal, handleCloseModal} = useModal();

  return (
    
    <>
        <Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
            <EditTeacherForm/>
        </Modal>
        <TeachersCardsContainer>
            {
                teachers.length > 0
                ? teachers.map((teacher, index) => (
                    <TeacherCard key={`${teacher}-${index}`}>
                        <img src={userURL} alt="" />
                        <h3>Henry Johnson</h3>
                        <p>Natural Science</p>
                        <TeacherCardActions>
                            <IconButton icon={<FiEdit/>} onClick={handleOpenModal}/>
                            <IconButton variant='outline' icon={<FiTrash/>}/>
                        </TeacherCardActions>
                    </TeacherCard>
                ))
                : <TeachersLegend>No teachers yet</TeachersLegend>
            }
        </TeachersCardsContainer>
    </>
  )
}
