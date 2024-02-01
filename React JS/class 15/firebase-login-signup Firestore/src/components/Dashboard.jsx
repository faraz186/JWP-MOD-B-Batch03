import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const logOut = ()=>{
        localStorage.clear();
        navigate('/')
    }
  return (
    <>
        <h1>Dashboard</h1>

        <button onClick={logOut}>Logout</button>
    </>
  )
}

export default Dashboard