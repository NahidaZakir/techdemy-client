import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";

import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import Details from "../pages/Details/Details";
import EachCategory from "../pages/EachCategory/EachCategory";

import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Register from "../pages/LogIn/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Ques from "../pages/Ques/Ques";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/category/:id',
                element: <EachCategory></EachCategory>,
                loader: ({ params }) => fetch(`https://techdemy-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://techdemy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://techdemy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Ques></Ques>,
                loader: () => fetch('https://techdemy-server.vercel.app/faq')
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('https://techdemy-server.vercel.app/blogs')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
])