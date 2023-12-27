import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function UsersScreen() {
  const [userdata, setUserData] = useState([]);
  const [useIsLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    setIsLoader(true);
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        console.log(res.data.users);
        setUserData(res.data.users);
        setIsLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getsingleData = (id) => {
    navigate(`/home/users/${id}`);
  };
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h3">Users screen</Typography>
      <Button
        onClick={getData}
        style={{ marginTop: 15, fontSize: 15, marginBottom: 15 }}
        variant="contained"
      >
        Get api Data
      </Button>

      {useIsLoader ? (
        <Box>
          <CircularProgress style={{ margin: " 150px auto" }} color="inherit" />
        </Box>
      ) : (
        <>
          {userdata.map((e, i) => {
            return (
              <Box
                style={{
                  margin: "auto",
                  padding: 20,
                  backgroundColor: "lightgrey",
                  marginBottom: 20,
                  width: "600px",
                  borderRadius: 15,
                }}
                key={i}
                onClick={() => getsingleData(e.id)}
              >
                <Typography>
                  <img
                    style={{ margin: "-20px auto 25px auto" }}
                    src={e.image}
                    width="150"
                    height="200"
                  />
                </Typography>
                <Typography>FirstName: {e.firstName}</Typography>
                <Typography>LastName:{e.lastName}</Typography>
                <Typography>age: {e.age}</Typography>
                <Typography>gender: {e.gender}</Typography>
                <Typography>UserName: {e.username}</Typography>
                <Typography>Password: {e.password}</Typography>
                <Typography>Blood Group: {e.bloodGroup}</Typography>
                <Typography>Email: {e.email}</Typography>
                <Typography>Phone Number: {e.phone}</Typography>
                <Typography>Mac-Address: {e.macAddress}</Typography>
                <Typography>University: {e.university}</Typography>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
}
