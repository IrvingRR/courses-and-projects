import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
    isAuthenticated: false,
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    isChecking: true,
    errorMessage: null

   },

   reducers: {

        checkingCredentials: (state) => {
            state.isChecking = true;
        },

        login: (state, { payload }) => {
            state.isAuthenticated = true;
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
            state.isChecking = false;
            state.errorMessage = null;
        },

        logout: (state, action) => {
            state.isAuthenticated = false;
            state.displayName = null;
            state.email = null;
            state.photoURL = null;
            state.isChecking = false;
            state.errorMessage = action.payload;
        }

   }
});

export const { checkingCredentials, login, logout } = authSlice.actions;