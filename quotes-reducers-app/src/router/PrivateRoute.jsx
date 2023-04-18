import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts";

export const PrivateRoute = ({ children }) => {

    const { sessionState } = useContext(SessionContext);
    
    return sessionState.logged ? children : <Navigate to='/'/>
}
