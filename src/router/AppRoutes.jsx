import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"
import LoginPage from "../page/LoginPage"
import RegisterPage from "../page/RegisterPage"
import HomePage from "../page/HomePage"

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element:<LoginPage />,
                },
                {
                    path:"register",
                    element:<RegisterPage />
                }
            ]
        },
        {
            path:"/main",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<HomePage />
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
};

export default AppRoutes
