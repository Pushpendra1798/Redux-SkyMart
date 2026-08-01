import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"
import LoginPage from "../page/LoginPage"
import RegisterPage from "../page/RegisterPage"
import HomePage from "../page/HomePage"
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux"
import { addUser } from '../feature/authSlice'
import { useEffect } from 'react'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'

const AppRoutes = () => {
    const dispatch = useDispatch();
    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if(!loggedInUser) {
            toast.error("UnAuthorized user");
            return;
        }

        dispatch(addUser(loggedInUser));
    };

    useEffect(()=>{
        hydrateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected />,
            children:[
                {
                    path:"",
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
                    ],
                }
            ]
        },
        {
            path:"/main",
            element:<MainProtected />,
            children:[
                {
                    path:"",
                    element:<MainLayout />,
                    children:[
                        {
                            path:"",
                            element:<HomePage />
                        },
                    ],
                }
            ],
        }
    ])
    return <RouterProvider router={router}/>
};

export default AppRoutes
