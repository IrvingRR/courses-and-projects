import { configureStore } from "@reduxjs/toolkit";
import { candidatesSlice, jobsSlice } from "./slices";

export const store = configureStore({

    reducer: {
        jobs: jobsSlice.reducer,
        candidates: candidatesSlice.reducer
    }

});