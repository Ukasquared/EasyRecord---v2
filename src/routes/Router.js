//import { element } from "prop-types";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

/**** Home Page */
const Home = lazy(() => import("../layouts/Home.jsx"));

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard/starter", element: <Navigate to="/starter" /> },
      { path: "/dashboard/starter", exact: true, element: <Starter /> },
      { path: "/dashboard/about", exact: true, element: <About /> },
    ],
  },
];

export default ThemeRoutes;