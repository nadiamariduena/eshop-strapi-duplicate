import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.scss";

//
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
//
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Favi from "./components/Favi/Favi";
//

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
//

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // here below are the children of the "Layout"
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/favoritesss",
        element: <Favi />,
      }, // add the new route for favorites
    ],
  },
]);
//

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
