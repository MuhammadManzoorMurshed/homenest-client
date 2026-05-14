import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout/RootLayout";
import Home from "../pages/home/Home";
import AllProperties from "../pages/all-properties/AllProperties";
import AddProperties from "../pages/add-properties/AddProperties";
import MyProperties from "../pages/my-properties/MyProperties";
import MyRatings from "../pages/my-ratings/MyRatings";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";
import ProtectedRoute from "./ProtectedRoute";
import PropertyDetails from "../pages/property-details/PropertyDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,

        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'all-properties',
                element: <AllProperties />
            },
            {
                path: 'add-properties',
                element: <ProtectedRoute>
                    <AddProperties />
                </ProtectedRoute>
            },
            {
                path: 'my-properties',
                element: //<ProtectedRoute>
                    <MyProperties />
                //</ProtectedRoute>
            },
            {
                path: 'my-ratings',
                element: // <ProtectedRoute>
                    <MyRatings />
                // </ProtectedRoute>
            },
            {
                path: 'authentication/signup',
                element: <Signup />
            },
            {
                path: 'authentication/signin',
                element: <Signin />
            },
            {
                path: 'properties/:id',
                element: // <ProtectedRoute>
                    <PropertyDetails />
                // </ProtectedRoute>
            }
        ],
    },
    {
        path: '/*',
        element: <div className='flex justify-center items-center min-h-screen'>
            <h1>Error Page</h1>
        </div>
    }
])

export default router;