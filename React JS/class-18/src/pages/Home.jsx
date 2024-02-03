import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUserAuth } from "../../store/slices/user_data_slice";

export const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user_data);

  console.log(isLoggedIn);

  const dispatch = useDispatch();

  // login handle function
  const login_handle = () => {
    dispatch(setUserAuth());
  };

  // Logout handle function

  const logout_handle = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <div className="h-[30px] bg-blue-500 w-full flex justify-between">
        <div className="text-white">Logo</div>

        <div className="text-white">
          {isLoggedIn ? (
            <div>
              <button onClick={logout_handle}>Logout</button>
            </div>
          ) : (
            <div className="space-x-4">
              <button>Login</button>
              <button>Signup</button>
            </div>
          )}
        </div>
      </div>
      <Button onClick={login_handle}>Login</Button>
    </>
  );
};
