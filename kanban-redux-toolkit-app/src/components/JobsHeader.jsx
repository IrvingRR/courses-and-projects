import { useDispatch } from "react-redux";
import { deleteJobThunk } from "../store/slices/jobs";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiEdit, FiTrash } from "react-icons/fi";
import { JobsHeaderStyled, JobsHeaderContent, JobsHeaderActions, JobsHeaderLinks, JobsHeaderLink } from "../styled";
import { AddCandidateForm, Button, IconButton, Modal } from ".";
import { toast } from "react-hot-toast";
import { useModal } from "../hooks";
import { EditJobForm } from "./EditJobForm";

export const JobsHeader = ({ job = {} }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteJob = () => {
        dispatch(deleteJobThunk(job.id));
        toast.success('Job deleted');
        navigate('/panel/jobs/');
    };

    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const { isOpen: isOpenModalCandidate, handleOpenModal: handleOpenModalCandidate, handleCloseModal: handleCloseModalCandidate } = useModal();


  return (
    <JobsHeaderStyled>
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
            <EditJobForm handleCloseModal={handleCloseModal}/>
        </Modal>

        <Modal isOpen={isOpenModalCandidate} handleCloseModal={handleCloseModalCandidate}>
            <AddCandidateForm handleCloseModal={handleCloseModalCandidate} job={job}/>
        </Modal>
        <JobsHeaderContent>
            <h2>{ job.title }</h2>
            <JobsHeaderActions>
                <IconButton variant='outline' rounded icon={<FiTrash/>} onClick={handleDeleteJob}/>
                <IconButton variant='outline' rounded icon={<FiEdit/>} onClick={handleOpenModal}/>
                <Button rounded onClick={handleOpenModalCandidate}>
                    <FiUserPlus/>
                    Invite candidats
                </Button>
            </JobsHeaderActions>
        </JobsHeaderContent>
        <JobsHeaderLinks>
            <JobsHeaderLink to='kanban-board'>Kanban board</JobsHeaderLink>
            <JobsHeaderLink to='job-info'>Job info</JobsHeaderLink>
        </JobsHeaderLinks>
    </JobsHeaderStyled>
  )
}
