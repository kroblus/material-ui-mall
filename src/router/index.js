import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Product from "../page/Product";
import Login from "../page/Login";
import SignUp from "../page/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/product/:id',
        element: <Product/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    }
])

export default router;