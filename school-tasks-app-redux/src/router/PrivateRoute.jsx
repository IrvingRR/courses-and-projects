import { Navigate } from "react-router-dom";
import { useCheckAuthentication } from "../hooks/useCheckAuthentication";

export const PrivateRoute = ({ children }) => {

  const { isAuthenticated } = useCheckAuthentication();

  return (isAuthenticated ? children : <Navigate to='/'/>);

};
