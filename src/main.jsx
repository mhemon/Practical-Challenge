import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsList from './components/ProductsList/ProductsList.jsx';
import UserHome from './components/UserHome/UserHome.jsx';
import UserLayout from './layout/UserLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <UserLayout/>,
    children: [
      {
        path: '/home',
        element: <UserHome/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
