import { Api } from "../../../axiosApi";
import { setCandidates, setError, startLoading, createCandidate } from "./candidatesSlice";

export const getCandidatesFromOneJobThunk = (idJob) => {
    return async (dispatch) => {
        try {
            
            dispatch(startLoading());

            const { data } = await Api.get(`/candidates/?job=${idJob}`);

            dispatch(setCandidates(data));

        } catch (error) {
            dispatch(setError(`It occurred the next error: ${error}`));
        }
    }
}

export const createCandidateThunk = (candidate) => {
    return async (dispatch) => {
        try {
            
            dispatch(startLoading());

            const { data } = await Api.post(`/candidates/`, candidate);

            dispatch(createCandidate(data));

        } catch (error) {
            dispatch(setError(`It occurred the next error: ${error}`));
        }
    }
}