import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function Profile()
{
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location.state);
    console.log(params);

    const backHome =()=>{
        navigate('/home')
    }
    return(
        <div>
            <Typography sx={{textAlign:"center"}} variant="h3">Profile Page</Typography>
            <br />
            <br />
            <Box sx={{textAlign:"center"}}>
            <Typography variant="h6">Email: {location.state.email}</Typography>
            <Typography variant="h6">Password: {location.state.password}</Typography>
<br />
<br />

            <Button onClick={backHome} variant="contained">Go to Dashboard</Button>
            </Box>
        </div>

    )
}