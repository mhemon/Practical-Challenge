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
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminLayout from './layout/AdminLayout';
import CustomerList from './components/CustomerList/CustomerList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/cart',
    element: <ProductCart />,
    // load initial cart and products data
    loader: productsAndCartData,
  },
  {
    path: "home",
    element: <UserLayout />,
    children: [
      {
        path: '/home',
        element: <UserHome />,
        showNavbar: true,
      }
    ]
  },
  {
    path: "admin",
    element: <AdminLayout/>,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard/>
      },
      {
        path: 'customerList',
        element: <CustomerList/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
