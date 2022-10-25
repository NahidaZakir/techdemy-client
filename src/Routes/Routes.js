import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";

import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Register from "../pages/LogIn/Register";
import Ques from "../pages/Ques/Ques";
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
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Ques></Ques>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                pat: '/register',
                element: <Register></Register>
            }



        ]
    }
])