import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CourseDetails from "./pages/courseDetails/CourseDetails";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const Layout = () => {
    return (
      <div>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Outlet />
        <Footer />
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/course/:courseId",
          element: <CourseDetails />,
        },
      ],
    },
  ]);

  return (
    <div className={showSidebar ? "app sidebarActive" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
