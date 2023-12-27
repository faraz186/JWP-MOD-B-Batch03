import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate()
    const [obj,setObj] = useState({});

    const fillModel = (key, val) => {
        obj[key] = val;
        setObj({ ...obj });
    };
    
    const loginUser = ()=>{
        console.log(obj);
        navigate(`/profile/${obj.email}`,{state:obj});
      }
    return(
        <>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#bdbdbd"}}>
            <Paper sx={{padding:"80px",borderRadius:"30px",boxShadow:"12px 12px 7px #212121"}} variant="outlined" square >
                <Typography variant="h4" sx={{textAlign:"center",fontFamily:"serif"}}>Login</Typography>
            <br />

            <TextField onChange={(e)=>fillModel("email",e.target.value)} type="email" autoComplete={false} label="Email" variant="outlined" />
            <br />
            <br />

            <TextField onChange={(e)=>fillModel("password",e.target.value)} type="password" autoComplete={false} label="Password" variant="outlined" />
            <br />
            <br />

            <Button onClick={loginUser} sx={{width:"100%"}} variant="contained">Login</Button>
            </Paper>
        </Box>
        </>
    )
}