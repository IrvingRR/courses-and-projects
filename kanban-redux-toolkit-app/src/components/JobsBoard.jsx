import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { JobsBoardContainer } from '../styled';
import { JobsHeader, Loader } from './';
import { getOneJobThunk } from "../store/slices/jobs";

export const JobsBoard = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { job, isJobLoading } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(getOneJobThunk(id));
  }, [id]);

  return (
    <JobsBoardContainer>
        { isJobLoading && <Loader/> }
        <JobsHeader job={job}/>
        <Outlet/>
    </JobsBoardContainer>
  )
}
