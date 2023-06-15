import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import StudentRoute from "./StudentRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "adminhome",
            element: (
              <AdminRoute>
                <AdminHome></AdminHome>
              </AdminRoute>
            ),
          },
          {
            path: "manageClasses",
            element: (
              <AdminRoute>
                <ManageClasses></ManageClasses>
              </AdminRoute>
            ),
          },
          {
            path: "allusers",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
          {
            path: "instructorhome",
            element: (
              <InstructorRoute>
                <InstructorHome></InstructorHome>
              </InstructorRoute>
            ),
          },
          {
            path: "addclass",
            element: (
              <InstructorRoute>
                <AddClass></AddClass>
              </InstructorRoute>
            ),
          },
          {
            path: "studenthome",
            element: (
              <StudentRoute>
                <StudentHome></StudentHome>
              </StudentRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
