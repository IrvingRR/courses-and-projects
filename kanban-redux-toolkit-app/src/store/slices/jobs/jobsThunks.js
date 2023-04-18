import { Api } from "../../../axiosApi";
import { startLoading, setJobs, setError, createJob, setJob, deleteJob, startJobLoading, updateJob } from "./jobsSlice";

export const getJobsThunk = () => {
    
    return async (dispatch) => {
        
        try {
            
            dispatch(startLoading());
            
            const { data } = await Api.get('/jobs');
            
            dispatch(setJobs(data));
            
        } catch (error) {
            dispatch(setError(`It occurred an error: ${error}`));
        }
    }

};

export const createJobThunk = (job) => {
    
    return async (dispatch) => {

        try {
            
            dispatch(startLoading());
            
            const { data } = await Api.post('/jobs', job);
            dispatch(createJob(data));
            
        } catch (error) {
            dispatch(setError(`It occurred an error: ${error}`));
        }
    }

};

export const getOneJobThunk = (id) => {
    return async (dispatch) => {
        try {

            dispatch(startJobLoading());
            
            const { data } = await Api.get(`/jobs/${id}`);
            dispatch(setJob(data));
            
        } catch (error) {
            dispatch(setError(`It occurred an error: ${error}`));
        }
    }
};

export const deleteJobThunk = (id) => {
    return async (dispatch) => {
        try {

            // dispatch(startLoading());
            
            await Api.delete(`/jobs/${id}`);
            dispatch(deleteJob(id));
            
        } catch (error) {
            dispatch(setError(`It occurred an error: ${error}`));
        }
    }
};

export const updateJobThunk = (id, job) => {
    
    return async (dispatch) => {

        try {
            
            dispatch(startJobLoading());
            dispatch(startJobLoading());
            
            const { data } = await Api.put(`/jobs/${id}`, job);
            dispatch(updateJob(data));
            
        } catch (error) {
            dispatch(setError(`It occurred an error: ${error}`));
        }
    }

};