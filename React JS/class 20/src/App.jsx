import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
import SignUp from './Screens/Signup'
import DashboardHome from './Screens/DashboardHome'
import Profile from './Screens/Profile'
import Announcement from './Screens/Announcement'
import Settings from './Screens/Settings'
import Product from './Screens/Product'
import CreateUser from './Screens/CreateUser'
import EditUser from './Screens/EditUser'

const App = () => {
  return (
    <Routes>
        <Route path='/Signup' element={<SignUp />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<DashboardHome />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='announcement' element={<Announcement />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
        <Route index element={<DashboardHome />}/>
        <Route path='create' element={<CreateUser />}/>
        <Route path='update/:id' element={<EditUser />}/>
        <Route path='update/:id' element={<DashboardHome />}/>

    </Routes>
  )
}

export default App
