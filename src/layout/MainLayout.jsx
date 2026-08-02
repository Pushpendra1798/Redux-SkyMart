import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar />
            <div className='p-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
