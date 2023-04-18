import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signin } from '../pages';
import { Header } from './Header';

export const Router = () => {
  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/signin' element={ <Signin/> }/>
      <Route path='/platform' element={ <h2>Movies platform</h2> }/>
      <Route path='/*' element={<h2>Error 404 - Not found</h2>}/>
    </Routes>
    </>
  )
}
