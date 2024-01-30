import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/slices/productSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.ProductReducer);

  // console.log("selector", selector.allProducts);

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <CircularProgressWithLabel value={progress} />
      {allProducts.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} width={250} alt="" />
            <h1>{e.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
