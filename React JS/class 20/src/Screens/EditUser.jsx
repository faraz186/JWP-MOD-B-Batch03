import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get('http://localhost:3030/usersArr/' + id)
        .then((res) => setData(res.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleSubmit = (event) => {
    try {
        event.preventDefault()
        axios.put('http://localhost:3030/usersArr/'+id,data)
        .then(()=>{
            alert('User Update successfully..');
            navigate('/')
        })
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Paper sx={{ margin: 20, padding: 5, borderRadius: 5 }} elevation={24}>
          <Typography variant='h4' sx={{ marginBottom: 5 }}>Update User</Typography>
          <TextField
            disabled={true}
            variant="outlined"
            color="secondary"
            sx={{ mb: 3}}
            fullWidth
            value={data.id}
          />
          <TextField
            onChange={e => setData({...data,name:e.target.value})}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={data.name}
          />
          <TextField
            onChange={e => setData({...data,username:e.target.value})}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={data.username}

          />
          <TextField
            onChange={e => setData({...data,email:e.target.value})}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={data.email}

          />
          <TextField
            onChange={e => setData({...data,phone:e.target.value})}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={data.phone}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="contained" color="secondary" type="submit">Update</Button>

        </Paper>
      </form>
    </div>
  )
}

export default EditUser
