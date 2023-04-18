import { useReducer } from "react";
import { sessionTypes } from "../actions/session";
import { sessionReducer } from "../reducers";
import { SessionContext } from "./SessionContext";
import { toast } from "react-hot-toast";

const init = () => {
    
    return {
        logged: !!JSON.parse(localStorage.getItem('session')),
        user: JSON.parse(localStorage.getItem('session'))
    };
    
}

export const SessionProvider = ({ children }) => {

    const [sessionState, dispatch] = useReducer(sessionReducer, {}, init);

    console.log(sessionState);

    const login = (user) => {
        
        const action = {
            type: sessionTypes.login,
            payload: user
        }

        localStorage.setItem('session', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: sessionTypes.logout
        };

        toast(`Good bye ${ sessionState.user.name } 👋`);

        setTimeout(() => {

            localStorage.removeItem('session');
            dispatch(action);

        }, 2000);
    }

    return (
        <SessionContext.Provider value={ { sessionState, login, logout } }>
            {children}
        </SessionContext.Provider>
    )
}
