import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts";

export const PublicRoute = ({ children }) => {

    const { sessionState } = useContext(SessionContext);

    return !sessionState.logged ? children : <Navigate to='/panel/dashboard'/>
}