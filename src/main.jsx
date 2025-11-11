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
import Adoption from './Components/Adoption/Adoption.jsx';
import Accessories from './Components/Accessories/Accessories.jsx';
import PetFoods from './Components/PetFoods/PetFoods.jsx';
import PetCaringProducts from './Components/PetCaringProducts/PetCaringProducts.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';
import ProductsDetails from './Pages/ProductsDetails.jsx';


const router = createBrowserRouter([
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
        Component: PetsAndSupplies,
        loader: () => fetch('http://localhost:3000/pets-supplies')
      },
      {
        path: '/add-listing',
        element: <PrivateRoute>
          <AddListing></AddListing>
        </PrivateRoute>
      },
      {
        path: '/my-listing',
        element: <PrivateRoute>
          <MyListing></MyListing>
        </PrivateRoute>
      },
      {
        path: '/my-orders',
        element: <PrivateRoute>
          <MyOrder></MyOrder>
        </PrivateRoute>
      },
      {
        path: '/accessories',
        Component: Accessories,
        loader: () => fetch('http://localhost:3000/pets-supplies')
      },
      {
        path: '/pet-foods',
        Component: PetFoods,
        loader: () => fetch('http://localhost:3000/pets-supplies')
      },
      {
        path: '/petCaringProducts',
        Component: PetCaringProducts,
        loader: () => fetch('http://localhost:3000/pets-supplies')
      },
      {
        path: '/adoption',
        Component: Adoption,
        loader: () => fetch('http://localhost:3000/pets-supplies')
      },
      {
        path: '/product-details/:id',
        element: <PrivateRoute>
          <ProductsDetails></ProductsDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/pets-supplies/${params.id}`)
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