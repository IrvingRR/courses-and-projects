import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { classesSlice } from "./classes/classesSlice";
import { schoolClassSlice } from "./schoolClass/schoolClass";

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        classes: classesSlice.reducer,
        schoolClass: schoolClassSlice.reducer
    }

});