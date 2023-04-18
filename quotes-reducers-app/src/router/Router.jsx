import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute, PanelRoutes, AuthRoutes } from "./";

export const Router = () => {
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
    </Routes>
  )
}