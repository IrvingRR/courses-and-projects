import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useContext } from "react";
import { SessionContext } from '../contexts/SessionContext';

// Pages
import { Home, Login, ErrorPage, Signin, Panel, Categories } from '../pages';
import { PanelTemplate } from "../templates";

export const Router = () => {

    const { session } = useContext(SessionContext);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <ProtectedRoute condition={ session.user } redirectTo='/panel'/> }>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='login' element={ <Login/> }/>
                    <Route path='signin' element={ <Signin/> }/>
                </Route>

                <Route element={ <ProtectedRoute condition={ !session.user || !session.token } redirectTo='/'/> }>
                    <Route path='/panel' element={ <PanelTemplate/> }>
                        <Route path='/panel' index element={ <Panel/> }/>
                        <Route path='wishlists' element={ <h2>Wishlists app</h2> }/>
                        <Route path='categories' element={ <Categories/> }/>
                    </Route>
                </Route>
                <Route path='*' element={ <ErrorPage/> }/>
            </Routes>
        </BrowserRouter>
    );
}
