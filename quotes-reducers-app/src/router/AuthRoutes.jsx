import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signin } from '../pages';
import { AuthTemplate } from '../templates';

export const AuthRoutes = () => {
  return (
    <>
      {/* <h2>Navbar</h2> */}
      <Routes>
          <Route path='/' element={ <AuthTemplate/> }>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signin' element={<Signin/>}/>
          </Route>
      </Routes>
    </>
  )
}
