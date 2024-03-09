import React from "react";
import HomePage from "../../pages/HomePage";
import MyEventsPage from "../../pages/MyEventsPage";
import AboutPage from "../../pages/AboutPage";
import ProductsPage from "../../pages/ProductsPage";

const sidebarData = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <MyEventsPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default sidebarData;
