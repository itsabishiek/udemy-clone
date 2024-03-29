import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import Teaching from "./pages/teaching/Teaching";
import Instructor from "./pages/instructor/Instructor";
import InstructorHeader from "./components/instructorHeader/InstructorHeader";
import CreateCourse from "./pages/createCourse/CreateCourse";
import CreateCourseDetails from "./pages/createCourseDetails/CreateCourseDetails";

import "./App.css";
import Courses from "./pages/courses/Courses";
import OrderSuccessful from "./pages/orderSuccessful/OrderSuccessful";
import Pay from "./pages/pay/Pay";
import CourseEnrolled from "./pages/courseEnrolled/CourseEnrolled";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { courseId } = useParams();

  const Layout = () => {
    return (
      <div>
        {window.location.pathname !== "/instructor/courses" &&
        window.location.pathname !== "/course/create" &&
        window.location.pathname !== `/course/create/${courseId}` ? (
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : (
          <InstructorHeader
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        )}
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
        {
          path: "/teaching",
          element: <Teaching />,
        },
        {
          path: "/instructor/courses",
          element: <Instructor />,
        },
        {
          path: "/course/create",
          element: <CreateCourse />,
        },
        {
          path: "/course/create/:courseId",
          element: <CreateCourseDetails />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/make-payment/:courseId",
          element: <Pay />,
        },
        {
          path: "/order-successful",
          element: <OrderSuccessful />,
        },
        {
          path: "/course-enrolled",
          element: <CourseEnrolled />,
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
