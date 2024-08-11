import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const navigate = useNavigate();
    const [createUser, setCreateUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })
 
    const handleSubmit = (event) => {
        try {
            event.preventDefault()
            axios.post('http://localhost:3030/usersArr',createUser)
            .then(()=>{
                alert('User Create successfully..');
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
            <Paper sx={{margin:20,padding:5,borderRadius:5}} elevation={24}>
            <Typography variant='h4' sx={{marginBottom:5}}>Create User</Typography>
                <TextField 
                    label="Full Name"
                    onChange={e => setCreateUser({...createUser,name:e.target.value})}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={createUser.name}
                 />
                 <TextField 
                    label="Username"
                    onChange={e => setCreateUser({...createUser,username:e.target.value})}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={createUser.username}

                 />
                 <TextField 
                    label="Email"
                    onChange={e => setCreateUser({...createUser,email:e.target.value})}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={createUser.email}

                 />
                 <TextField 
                    label="Phone Number"
                    onChange={e => setCreateUser({...createUser,phone:e.target.value})}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={createUser.phone}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="contained" color="secondary" type="submit">Create</Button>
             
            </Paper>
        </form>
    </div>
  )
}

export default CreateUser
