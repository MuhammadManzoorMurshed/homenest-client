import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout/RootLayout";
import Home from "../pages/home/Home";
import AllProperties from "../pages/all-properties/AllProperties";
import AddProperties from "../pages/add-properties/AddProperties";
import MyProperties from "../pages/my-properties/MyProperties";
import MyRatings from "../pages/my-ratings/MyRatings";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";

const router = createBrowserRouter ([
    {
        path: '/',
        Component: RootLayout,

        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'all-properties',
                Component: AllProperties
            },
            {
                path: 'add-properties',
                Component: AddProperties
            },
            {
                path: 'my-properties',
                Component: MyProperties
            },
            {
                path: 'my-ratings',
                Component: MyRatings
            },
            {
                path: 'authentication/signup',
                Component: Signup
            },
            {
                path: 'authentication/signin',
                Component: Signin
            },
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