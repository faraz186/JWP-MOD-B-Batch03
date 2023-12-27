import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function SingleProScreen() {
  const params = useParams();

  const [productmodel, setproductModel] = useState({});
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setproductModel(res.data);
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
        Single Product Data
      </Typography>
      {isLoader ? (
        <Box style={{ textAlign: "center" }}>
          <CircularProgress style={{ margin: " 100px auto" }} color="inherit" />
        </Box>
      ) : (
        <>
          <Typography>
            <img
              style={{ margin: "15px auto 20px auto", borderRadius: "10%" }}
              src={productmodel.images[0]}
              width={300}
            />
          </Typography>
          <Typography>Brand: {productmodel.brand}</Typography>
          <Typography>Title: {productmodel.title}</Typography>
          <Typography>Description: {productmodel.description}</Typography>
          <Typography>DisCount: {productmodel.discountPercentage}</Typography>
          <Typography>Price: {productmodel.price}</Typography>
          <Typography>Rating: {productmodel.rating}</Typography>
        </>
      )}
    </Box>
  );
}

export default SingleProScreen;
