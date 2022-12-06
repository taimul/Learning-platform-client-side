import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ResetPassword from "../../Pages/Login/ResetPassword";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

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
                loader: () => fetch('https://learn-server-seven.vercel.app/courses'),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learn-server-seven.vercel.app/courses/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://learn-server-seven.vercel.app/category/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reset',
                element: <ResetPassword></ResetPassword>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learn-server-seven.vercel.app/courses/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>
            },
            { path: '*', element: <ErrorPage></ErrorPage> }
        ]
    }

])