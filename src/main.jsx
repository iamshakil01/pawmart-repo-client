import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Components/MainLayout/MainLayout.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Components/Home/Home.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Login from './Pages/Login.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Register from './Pages/Resister.jsx'
import { ToastContainer } from 'react-toastify'
import AddListing from './Pages/AddListing.jsx'
import MyListing from './Pages/MyListing.jsx'
import MyOrder from './Pages/MyOrder.jsx'
import PetsAndSupplies from './Pages/PetsAndSupplies.jsx'

const router = createBrowserRouter([
  // Primary Layout Route
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/pets-supplies',
        Component:PetsAndSupplies
      },
      {
        path: '/add-listing',
        Component: AddListing
      },
      {
        path: '/my-listing',
        Component:MyListing
      },
      {
        path: '/my-orders',
        Component: MyOrder
      },
    ],
  },

  {
    path: '/*',
    Component: ErrorPage
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)