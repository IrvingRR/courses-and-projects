import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRoutes } from "./AuthRoutes";
import { PanelRoutes } from "./PanelRoutes";
import { Loader } from "../components";
import { useCheckAuthentication } from "../hooks/useCheckAuthentication";

export const Router = () => {

  const { isChecking } = useCheckAuthentication();

  if(isChecking) return <Loader isLoading={isChecking}/>

  return (
    <Routes>
        {/* Public routes */}
        <Route path='/*' element={
          <PublicRoute>
            <AuthRoutes/>
          </PublicRoute>
        }/>

        {/* Private routes */}
        <Route path='/panel/*' element={
          <PrivateRoute>
            <PanelRoutes/>
          </PrivateRoute>
        }/>

        {/* <Route path='/*' element={<h2>Error 404 - Page not found</h2>}/> */}

    </Routes>
  );
};