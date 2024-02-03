import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
