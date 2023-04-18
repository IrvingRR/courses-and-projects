import { Navigate } from "react-router-dom";
import { useCheckAuthentication } from "../hooks/useCheckAuthentication";

export const PublicRoute = ({ children }) => {

  const { isAuthenticated } = useCheckAuthentication();

  return (isAuthenticated ? <Navigate to='/panel/dashboard'/> : children);

};
