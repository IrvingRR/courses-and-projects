
import { useEffect } from "react";
import {  FiStar, FiCheckSquare, FiUserCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { KanbanColumn, Loader } from "../components";
import { getCandidatesFromOneJobThunk } from "../store/slices/candidates/candidatesThunks";
import { JobsKanbanContainer } from "../styled";

export const JobsKanbanView = () => {

  const { isLoading } = useSelector(state => state.candidates);
  const { job } = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidatesFromOneJobThunk(job.id));
  }, [job]);

  return (
    <JobsKanbanContainer>
        { isLoading && <Loader/> }
        <KanbanColumn color='primary' title='New' filter='new' icon={<FiStar/>} limit={14}/>
        <KanbanColumn color='third' title='Shortlisted' filter='shortlisted' icon={<FiCheckSquare/>} limit={18}/>
        <KanbanColumn color='fourth' title='Interviewed' filter='interviewed' icon={<FiUserCheck/>} limit={5}/>
    </JobsKanbanContainer>
  )
}
