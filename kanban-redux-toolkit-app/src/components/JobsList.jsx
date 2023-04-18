import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  FiSearch, FiPlus, FiX, FiFrown } from "react-icons/fi";
import { JobsStyled, JobsHeader, JobsHeaderButtons, JobsBody, JobsElements, JobsInputSearch, JobsHeaderInfo } from '../styled';
import { AddJobForm, Button, IconButton, JobElement, Loader, Modal } from './';
import { getJobsThunk } from "../store/slices/jobs";
import { useModal } from '../hooks';

export const JobsList = () => {

    const { jobs, isLoading } = useSelector(state => state.jobs);
    const [isActiveInput, setIsActiveInput] = useState(false);
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobsThunk());
    }, []);

    useEffect(() => {
        setResults(jobs);
    }, [jobs]);


    const handleSearch = (e) => {

        if(e.target.value) {
            const search = e.target.value.toLowerCase();
            const filteredJobs = jobs.filter(jobs => jobs.title.toLowerCase().startsWith(search));
            setResults(filteredJobs);
            
        } else {
            setResults(jobs);
        }

    }

    const { handleOpenModal, handleCloseModal, isOpen } = useModal();

    return (
        <JobsStyled>
            { isLoading && <Loader/> }
            <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
                <AddJobForm handleCloseModal={handleCloseModal}/>
            </Modal>
            <JobsHeader>
                <JobsHeaderInfo>
                    <h3>Jobs</h3>
                    <JobsHeaderButtons>
                        <IconButton variant='transparent' icon={isActiveInput ? <FiX/> : <FiSearch/>} onClick={() => setIsActiveInput(!isActiveInput)}/>
                        <IconButton icon={<FiPlus/>} onClick={handleOpenModal}/>
                    </JobsHeaderButtons>
                </JobsHeaderInfo>
                <JobsInputSearch type='name' name='search' placeholder="Search" autoComplete="off" isActive={isActiveInput} onChange={handleSearch}/>
            </JobsHeader>
            <JobsBody>
                <JobsElements>
                    { 
                        results.length > 0
                        ? results.map(job => <JobElement key={job.id} to={`job/${job.id}/kanban-board`} job={job}/>)
                        : <div className="jobs-list-message">
                            <FiFrown/>
                            No jobs
                        </div>
                    }
                </JobsElements>
                <Button variant='secondary'>Manage Jobs</Button>
            </JobsBody>
        </JobsStyled>
  )
}
