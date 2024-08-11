import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TableData from '../components/Table'
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardHome = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3030/usersArr')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <Box sx={{marginTop:5}}>
      <Link to='/create'>
      <Button sx={{marginBottom:3,float:"right"}} variant='contained'>Create new User</Button>
      </Link>
      <br />
      <TableData data={data}/>
    </Box>
  )
}

export default DashboardHome
