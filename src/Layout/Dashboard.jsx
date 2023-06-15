import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
  // const isAdmin = false;
  // const isInstructor = true;
  // const isStudent = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          drawer
        </label>
      </div>
      <div className="drawer-side my-drawer w-4/12">
        <label htmlFor="my-drawer-2"></label>
        <ul className="menu p-4 w-80">
          {/* Admin */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/">
                  <FaBook></FaBook> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          )}

          {/* Instructor */}
          {isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/instructorhome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass">
                  <FaBook></FaBook> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <FaWallet></FaWallet> My Classes
                </NavLink>
              </li>
            </>
          )}

          {/* Student */}
          {isStudent && (
            <>
              <li>
                <NavLink to="/dashboard/studenthome">
                  <FaHome></FaHome> Student Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
