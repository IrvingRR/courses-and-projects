import { Routes, Route } from 'react-router-dom';
import { MainTemplate } from '../templates';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainTemplate/> }/>
    </Routes>
  )
}
