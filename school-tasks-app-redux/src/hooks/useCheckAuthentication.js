import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { checkingCredentials, login, logout } from "../redux/auth";

export const useCheckAuthentication = () => {

    const { isAuthenticated, isChecking } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {

            dispatch(checkingCredentials());

            if(!user) return dispatch(logout());

            const { uid, displayName, email, photoURL } = user;

            dispatch(login({ uid, displayName, email, photoURL }));

        });

    }, []);

    return {
        isAuthenticated,
        isChecking
    };

};