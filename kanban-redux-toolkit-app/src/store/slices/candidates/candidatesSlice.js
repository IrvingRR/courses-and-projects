import { createSlice } from '@reduxjs/toolkit';

export const candidatesSlice = createSlice({
   name: 'candidates',
   initialState: {
        candidates: [],
        isLoading: false,
        error: null
   },
   reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },

        setCandidates: (state, action) => {
            state.isLoading = false;
            state.candidates = action.payload;
        },

        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        
        createCandidate: (state, action) => {
            state.isLoading = false;
            state.candidates = [...state.candidates, action.payload];
        }
   }
});


// Action creators are generated for each case reducer function
export const { startLoading, setCandidates, setError, createCandidate } = candidatesSlice.actions;