import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, condition, redirectTo }) => {

    if(condition) {
        return <Navigate to={ redirectTo } />
    } 

    return children ? children : <Outlet/>

};