import { Routes, Route } from 'react-router-dom';
import { PanelTemplate } from '../templates/PanelTemplate';
import { ClassesPage, DashboardPage, TeachersPage, SchoolClassPage } from '../pages';

export const PanelRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <PanelTemplate/> } >
            <Route path='dashboard' element={<DashboardPage/>}/>
            <Route path='classes' element={<ClassesPage/>}/>
            <Route path='classes/:id' element={<SchoolClassPage/>}/>
            <Route path='teachers' element={<TeachersPage/>}/>
            <Route path='settings' element={<h2>Settings</h2>}/>
        </Route>
    </Routes>
  )
}
