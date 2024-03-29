import React from "react";

const Home = React.lazy(() => import("../Pages/Home"));

const NotFound = React.lazy(() => import("../Pages/NotFound"));

const routesPath = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routesPath;
