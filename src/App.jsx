import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { adminData, employeeData, getLocalStorageItem, setLocalStorageItem } from './utils/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'admin')

  }

  handleLogin()

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard />a */}


    </>
  )
}

export default App