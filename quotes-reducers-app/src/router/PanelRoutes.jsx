import { Routes, Route } from 'react-router-dom';
import { DashboardPage, AppointmentsPage } from '../pages';
import { PanelTemplate } from '../templates';

export const PanelRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PanelTemplate/>}>
            <Route index path='dashboard' element={<DashboardPage/>}/>
            <Route path='appointments' element={ <AppointmentsPage/> }/>
            <Route path='vets' element={ <h2>Vets</h2> }/>
            <Route path='patients' element={ <h2>Patients</h2> }/>
            <Route path='profile' element={ <h2>Profile</h2> }/>
            <Route path='settings' element={ <h2>Settings</h2> }/>
        </Route>
    </Routes>
  )
}
