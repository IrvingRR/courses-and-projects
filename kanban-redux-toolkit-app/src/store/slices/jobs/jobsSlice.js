import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
   name: 'jobs',
   initialState: {
    jobs: [],
    job: {},
    total: 0,
    isLoading: false,
    isJobLoading: false,
    error: false
   },
   reducers: {
     startLoading: (state) => {
         state.isLoading = true;
     },

     startJobLoading: (state) => {
        state.isJobLoading = true;
    },

     setJobs: (state, action) => {
         state.isLoading = false;
         state.jobs = action.payload;
     },

     setError: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
     },

     createJob: (state, action) => {
        state.isLoading = false;
        state.jobs = [...state.jobs, action.payload];
     },

     setJob: (state, action) => {
        state.isJobLoading = false;
        state.job = action.payload;
     },

     deleteJob: (state, action) => {
        state.isJobLoading = false;
        state.job = {},
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
     },

     updateJob: (state, action) => {
      state.jobs.map((job, index) => console.log(`ID: ${job.id} - Index: ${index}`));
   },
   }
});


// Action creators are generated for each case reducer function
export const { startLoading, setJobs, setError, createJob, setJob, startJobLoading, updateJob, deleteJob} = jobsSlice.actions;