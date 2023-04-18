import { Routes, Route } from 'react-router-dom';
import { JobsBoard } from '../components';
import { JobsPage } from '../pages/JobsPage';
import { RootTemplate } from '../template';
import { JobsKanbanView } from '../views';

export const Router = () => {
  return (
    <Routes>
        <Route path='/panel' element={<RootTemplate/>}>
          <Route path='dashboard' element={<h2>Dashboard</h2>}/>
          <Route path='jobs' element={<JobsPage/>}>
            <Route index element={<h2>Jobs page index</h2>}/>
            <Route path='job/:id' element={<JobsBoard/>}>
              <Route path='kanban-board' element={<JobsKanbanView/>}/>
              <Route path='job-info' element={<h2>Job info</h2>}/>
            </Route>
          </Route>
          <Route path='users' element={<h2>Users</h2>}/>
          <Route path='teams' element={<h2>Teams</h2>}/>
          <Route path='notifications' element={<h2>Notifications</h2>}/>
          <Route path='settings' element={<h2>Settings</h2>}/>
        </Route>
    </Routes>
  )
}
