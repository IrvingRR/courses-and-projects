import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, SigninPage } from '../auth/pages';
import { StoreRoutes } from '../store/routes/StoreRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const Router = () => {

  return (
    <Routes>
        {/* Public Routes */}
        <Route path='/' index element={ 
          <PublicRoute>
            <HomePage/>
          </PublicRoute>
         }/>
        <Route path='/login' element={ 
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
         }/>
        <Route path='/signin' element={ 
          <PublicRoute>
            <SigninPage/>
          </PublicRoute>
         }/>
        {/* <Route path='/*' element={ <h2>Error 404 - Not found</h2> }/> */}

        {/* Private Routes */}
        <Route path='/*' element={ 
          <PrivateRoute>
            <StoreRoutes/>
          </PrivateRoute>
        }/>
    </Routes>
  );
};