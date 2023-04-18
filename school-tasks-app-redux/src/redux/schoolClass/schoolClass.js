import { createSlice } from '@reduxjs/toolkit';

export const schoolClassSlice = createSlice({
   name: 'schoolClass',

   initialState: {
    schoolClass: {},
    isLoading: false,
    works: []
   },

   reducers: {

      startLoading: (state) => {

      },

      readSchoolClass: (state, action) => {

      },

      createWork: (state, action) => {

      },

      updateWork: (state, dispatch) => {

      },

      deleteWork: (state, dispatch) => {

      },

      filterWorks: (state, dispatch) => {

      },

      searchWorks: (state, dispatch) => {

      }
    
   }
});


export const { startLoading, readSchoolClass, createWork, updateWork, deleteWork, filterWorks, searchWorks } = schoolClassSlice.actions;