import React from "react";
import Home from "./Home";
import CreateUser from "../pages/CreateUser";
import AllUsers from "../pages/AllUsers";
import Navbar1 from "../navbar/Navbar1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createusers",
      element: <CreateUser />,
    },
    {
      path: "/allusers",
      element: <AllUsers />,
    },
  ]);
  return (
    <div>
      <Navbar1 />
      <RouterProvider router={router} />
    </div>
  );
};

export default Layout;
