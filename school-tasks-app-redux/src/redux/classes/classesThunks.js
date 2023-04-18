import { createClass, readClasses, searchClasses, startLoading } from "./classesSlice";
import { createClassService, deleteClassService, getAllClassesService } from "../../services";
import { toast } from "react-hot-toast";
import { deleteClass } from "./classesSlice";

export const startReadClassesThunk = () => {

    return async (dispatch, getState) => {

        dispatch(startLoading());

        const { uid } = getState().auth;

        const result = await getAllClassesService(uid);

        dispatch(readClasses(result));
        
    };

};

export const startCreateClassThunk = (data) => {

    return async (dispatch, getState) => {

        dispatch(startLoading());

        const { uid } = getState().auth;

        const newClass = {
            name: data.name,
            description: data.description || 'No description',
            teacher: {
                image: '',
                name: '',
                gender: ''
            },
            image: 'https://images.unsplash.com/photo-1544830281-1d5169d6b2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        };

        const result = await createClassService(uid, newClass);
        
        if(!result.ok) return toast.error(result.message);

        dispatch(createClass(result.data));
        toast.success(result.message);

    };

};

export const startDeleteClassThunk = (classID) => {


    return async (dispatch, getState) => {

        dispatch(startLoading());

        const { uid } = getState().auth;

        const result = await deleteClassService(uid, classID);
        
        if(!result.ok) return toast.error(result.message);

        dispatch(deleteClass(classID));
        toast.success(result.message);

    };


};

export const startSearchClassesThunk = (search) => {

    return async (dispatch, getState) => {

        const { classes } = getState().classes;

        const classesResults = classes.filter(currentClass => currentClass.name.toLowerCase().startsWith(search.toLowerCase()));

        dispatch(searchClasses(classesResults));
    }

}