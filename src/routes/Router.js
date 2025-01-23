//import { element } from "prop-types";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./protectedRoute.js"

/**** Home Page */
const Home = lazy(() => import("../layouts/Home.jsx"));

/****Layouts*****/
const AdminLayout = lazy(() => import("../layouts/AdminLayout.js"));
const TeacherLayout = lazy(() => import("../layouts/TeacherLayout.js"));
const ParentLayout = lazy(() => import("../layouts/ParentLayout.js"));

/***** Pages ****/
const Profile = lazy(() => import("../components/admin-dashboard/admin-profile.jsx"));
const Login = lazy(() => import("../layouts/login.jsx"));
const Register = lazy(() => import("../layouts/register.jsx"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard-admin",
    element: (<ProtectedLayout> 
                <AdminLayout /> 
              </ProtectedLayout>) ,
    children: [
      { path: "/dashboard-admin/profile", element: <Navigate to="/profile" /> },
      { path: "/dashboard-admin/profile", exact: true, element: <Profile /> },
    ],
  },
  {
    path: "/dashboard-teacher",
    element: (<ProtectedLayout> 
                <TeacherLayout /> 
              </ProtectedLayout>) ,
    children: [

    ],
  },
  {
    path: "/dashboard-parent",
    element: (<ProtectedLayout> 
                <ParentLayout /> 
              </ProtectedLayout>) ,
    children: [
      
    ],
  },
];

export default ThemeRoutes;
