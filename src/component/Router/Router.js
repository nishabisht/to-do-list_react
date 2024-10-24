import React from "react";
import { Home } from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../Signin/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { NavPublic } from "../NavPublic/NavPublic";
export const Router = createBrowserRouter([
  {
    path: "/to-do-list_react",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);
