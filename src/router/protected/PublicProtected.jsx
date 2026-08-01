import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from "react-redux"

const PublicProtected = () => {
    const {user} = useSelector((store) => store.auth);
    if(user) {
        return <Navigate to = {"/main"} />
    }
    return <Outlet />
}

export default PublicProtected
