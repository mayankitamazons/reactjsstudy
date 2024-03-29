import React from "react";

const Home = React.lazy(() => import("../Pages/Home"));

const Category = React.lazy(() => import("../Pages/Category"));

const NotFound = React.lazy(() => import("../Pages/NotFound"));

const routesPath = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/category/:slug",
    component: Category,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routesPath;
