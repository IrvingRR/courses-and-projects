import { useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { types } from "../types/auth";
import { AuthContext } from "./AuthContext";
import { decodeJWT } from '../helpers';

const init = () => {

    const auth = JSON.parse(localStorage.getItem('fake-store-auth')) || {};

    return {
        logged: !!auth.token,
        token: auth.token,
        user: auth.user
    };

}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (token) => {

        let user = {};

        if(token) {
            user = decodeJWT(token);
        }

        const action = {
            type: types.login,
            payload: { token, user },
        };
        
        localStorage.setItem('fake-store-auth', JSON.stringify({ token, user }));
        dispatch(action);

    };

    const logout = () => {
        const action = {
            type: types.logout,
        };

        localStorage.removeItem('fake-store-auth');
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
        { children }
    </AuthContext.Provider>
  )
}