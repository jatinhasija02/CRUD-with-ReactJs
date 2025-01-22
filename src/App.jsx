import React from "react";
import Home from "../src/pages/Home";
import CreateUser from "../src/pages/CreateUser";
import AllUsers from "../src/pages/AllUsers";
import Navbar1 from "../src/navbar/Navbar1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from "./pages/Edit";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar1 />
          <Home />,
        </>
      ),
    },
    {
      path: "/createusers",
      element: (
        <>
          <Navbar1 />
          <CreateUser />,
        </>
      ),
    },
    {
      path: "/allusers",
      element: (
        <>
          <Navbar1 />
          <AllUsers />,
        </>
      ),
    },
    {
      path: "/edit/:id",
      element: (
        <>
          <Navbar1 />
          <Edit />,
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
