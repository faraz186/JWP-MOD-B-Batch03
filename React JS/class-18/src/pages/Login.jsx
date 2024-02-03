import { Button } from "@mui/material";
import React from "react";
import { setUserAuth } from "../../store/slices/user_data_slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((a) => a);

  console.log(state);

  const login_handle = () => {
    dispatch(setUserAuth());
    navigate("/");
  };

  return (
    <>
      <Button onClick={login_handle}>Login User</Button>
    </>
  );
};
