import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function SinglePageScreen() {
  const params = useParams();
  const [model, setModel] = useState({});
  const [useIsLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    axios
      .get(`https://dummyjson.com/users/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setModel({ ...res.data });
        setIsLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box
      style={{
        margin: "auto",
        marginTop: 20,
        padding: 20,
        backgroundColor: "lightgrey",
        marginBottom: 20,
        width: "600px",
        borderRadius: 15,
      }}
    >
      <Typography
        style={{ marginBottom: 26, textAlign: "center" }}
        variant="h3"
      >
        Single User Data
      </Typography>
      {useIsLoader ? (
        <Box style={{ textAlign: "center" }}>
          <CircularProgress style={{ margin: " 100px auto" }} color="inherit" />
        </Box>
      ) : (
        <>
          <Typography>
            <img
              style={{ margin: "-20px auto 25px auto" }}
              src={model.image}
              width="150"
              height="200"
            />
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            FirstName: {model.firstName}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            LastName:{model.lastName}
          </Typography>
          <Typography style={{ fontSize: 18 }}>age: {model.age}</Typography>
          <Typography style={{ fontSize: 18 }}>
            gender: {model.gender}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            UserName: {model.username}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            Password: {model.password}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            Bloog Group: {model.bloodGroup}
          </Typography>
          <Typography style={{ fontSize: 18 }}>Email: {model.email}</Typography>
          <Typography style={{ fontSize: 18 }}>
            Phone Number: {model.phone}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            Mac-Address: {model.macAddress}
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            University: {model.university}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default SinglePageScreen;
