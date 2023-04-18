import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, SignupPage } from '../pages/auth';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignupPage/>}/>
    </Routes>
  )
}
