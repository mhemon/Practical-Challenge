import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserHome from './components/UserHome/UserHome.jsx';
import UserLayout from './layout/UserLayout.jsx';
import ProductCart from './components/ProductCart/ProductCart.jsx';
import Login from './components/Login/Login.jsx';
import { productsAndCartData } from './loader/productsAndCartData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    showNavbar: false,
  },
  {
    path: '/cart',
    element: <ProductCart />,
    showNavbar: true,
    // load initial cart and products data
    loader: productsAndCartData,
  },
  {
    path: "home",
    element: <UserLayout />,
    showNavbar: true,
    children: [
      {
        path: '/home',
        element: <UserHome />,
        showNavbar: true,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
