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
            path: "studenthome",
            element: <StudentHome></StudentHome>,
          },
          {
            path: "adminhome",
            element: (
              <AdminRoute>
                <AdminHome></AdminHome>
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
        ],
      },
    ],
  },
]);

export default router;
