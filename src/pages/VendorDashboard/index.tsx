import React from 'react'
import { Outlet } from 'react-router-dom'
import VendorSidebar from '../../components/sidebars/VendorSidebar'
import DashboardNavbar from '../../components/navbars/DashboardNavbar'
import MessageSidebar from '../../components/sidebars/MessageSidebar'

const VendorDashboard = () => {
    return (
        <div className="w-full h-screen flex">
            <VendorSidebar />
            <div className="w-full flex flex-col">
                <DashboardNavbar />
                <div className="flex-grow flex justify-between">
                    <div className="flex-grow max-h-messageSidebarHeight xs:max-h-messageSidebarMobileHeight overflow-auto no-scroll px-4">
                        <Outlet />
                    </div>
                    <MessageSidebar />
                </div>
            </div>
        </div>
    )
}

export default VendorDashboard
