import { createSlice } from '@reduxjs/toolkit';

export const classesSlice = createSlice({
   name: 'classes',
   
   initialState: {

    isLoading: false,
    search: '',
    classes: [],
    classesResults: [],
    classSelected: {}

   },

   reducers: {

    startLoading: (state) => {
        state.isLoading = true;
    },

    readClasses: (state, action) => {
        state.isLoading = false;
        state.classes = action.payload;
        state.classesResults = action.payload;
    },

    createClass: (state, action) => {
        state.isLoading = false;
        state.classes.push(action.payload);
    },

    updateClass: (state, action) => {

    },

    deleteClass: (state, action) => {
        state.isLoading = false;
        state.classes = state.classes.filter(currentClass => currentClass.id !== action.payload);
    },

    searchClasses: (state, action) => {
        state.classesResults = action.payload;
    }
     
   }
});


export const { startLoading, readClasses, createClass, updateClass, deleteClass, searchClasses, savingClass } = classesSlice.actions;