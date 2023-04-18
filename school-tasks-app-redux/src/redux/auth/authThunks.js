import { toast } from "react-hot-toast";
import { authenticationWithEmailAndPasswordAction, authenticationWithGoogleAction, logoutFirebaseAction, signUpWithEmailAndPasswordAction } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const startAuthenticationWithGoogleThunk = () => {

    return async (dispatch) => {

        dispatch(checkingCredentials());
        const result = await authenticationWithGoogleAction();
        
        if(!result.ok) {
            toast.error(result.errorMessage);
            return dispatch(logout(result.errorMessage));
        }

        toast.success(`Welcome ${result.displayName}`);

        setTimeout(() => {
            dispatch(login(result))
            console.log(result);
        }, 2000);

    };

};

export const startSignUpWithEmailAndPasswordThunk = (data) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signUpWithEmailAndPasswordAction(data);
        
        if(!result.ok) {
            toast.error(result.errorMessage);
            return dispatch(logout(result.errorMessage));
        }

        toast.success(`Welcome ${result.displayName}`);

        setTimeout(() => {
            dispatch(login(result))
        }, 2000);
    };

};

export const startAuthenticationWithEmailAndPasswordThunk = (data) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await authenticationWithEmailAndPasswordAction(data);
        
        if(!result.ok) {
            
            toast.error(result.errorMessage);
            return dispatch(logout(result.errorMessage));
        }

        toast.success(`Welcome ${result.displayName}`);

        setTimeout(() => {
            dispatch(login(result));
        }, 2000);
    };

};

export const startLogoutThunk = () => {

    return async (dispatch) => {

        await logoutFirebaseAction();
        dispatch(logout());
        
    };

};