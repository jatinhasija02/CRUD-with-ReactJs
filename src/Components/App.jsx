import Home from "./Home";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Navbar from "../NavBar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/create",
      element: (
        <>
          <Navbar />
          <Create />
        </>
      ),
    },
    {
      path: "/read",
      element: (
        <>
          <Navbar />
          <Read />
        </>
      ),
    },
    {
      path: "/update/:id",
      element: (
        <>
          <Navbar />
          <Update />
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
