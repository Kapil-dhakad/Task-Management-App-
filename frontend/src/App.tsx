import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import SingUp from './pages/auth/SingUp'
import Dashboard from './pages/admin/Dashboard'
import ManageTask from './pages/admin/ManageTask'
import ManageUsers from './pages/admin/ManageUsers'
import CreateTask from './pages/admin/CreateTask'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './pages/user/UserDashboard'
import MyTask from './pages/user/MyTask'
import TaskDetails from './pages/user/TaskDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sing-up" element={<SingUp/>}/>

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path='/admin/tasks' element={<ManageTask/>}/>
            <Route path='/admin/users' element={<ManageUsers/>}/>
            <Route path='/admin/create-task' element={<CreateTask/>}/>
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={['user']}/>}>
              <Route path='/user/dashboard' element={<UserDashboard/>}/>
              <Route path='/user/tasks' element={<MyTask/>}/>
              <Route path='user/task-details/:id' element={<TaskDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
