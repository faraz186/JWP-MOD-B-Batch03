import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductScreen() {
  const [photodata, setPhotoData] = useState([]);
  const [useIsLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();
  const getData = () => {
    setIsLoader(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setPhotoData(res.data.products);
        setIsLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getsingleData = (id) => {
    navigate(`/home/products/${id}`, { state: photodata });
  };
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h3">Product screen</Typography>
      <Button
        onClick={getData}
        style={{ marginTop: 15, fontSize: 15, marginBottom: 15 }}
        variant="contained"
      >
        Get api Data
      </Button>
      {useIsLoader ? (
        <Box style={{ textAlign: "center" }}>
          <CircularProgress style={{ margin: " 100px auto" }} color="inherit" />
        </Box>
      ) : (
        <>
          {photodata.map((e, i) => {
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
                    style={{
                      margin: "15px auto 20px auto",
                      borderRadius: "10%",
                    }}
                    src={e.images[0]}
                    width={250}
                  />
                </Typography>
                <Typography>Title: {e.title}</Typography>
                <Typography>Description: {e.description}</Typography>
                <Typography>Brand: {e.brand}</Typography>
                <Typography>DisCount: {e.discountPercentage}</Typography>
                <Typography>Price: {e.price}</Typography>
                <Typography>Rating: {e.rating}</Typography>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
}
