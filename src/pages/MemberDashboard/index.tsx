import React from 'react'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import { Outlet } from 'react-router-dom'
const MemberDashboard = () => {
    return (
        <>
            <SearchNavbar placeholder="Want to discover your dream venue?" />
            <div className="w-full min-h-screen pt-24">
                <Outlet />
            </div>
        </>
    )
}

export default MemberDashboard
