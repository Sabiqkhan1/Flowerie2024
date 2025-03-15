import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import VendorSidebar from '../../components/sidebars/VendorSidebar'
import DashboardNavbar from '../../components/navbars/DashboardNavbar'
import MessageSidebar from '../../components/sidebars/MessageSidebar'

const VendorDashboard = () => {
    const location = useLocation()
    return (
        <div className="w-full h-screen flex ">
            <VendorSidebar />
            <div className="w-full flex flex-col">
                <DashboardNavbar />
                <div className="flex-grow flex justify-between w-[99%]  ">
                    <div className="flex-grow max-h-messageSidebarHeight xs:max-h-messageSidebarMobileHeight overflow-auto no-scroll px-4   ">
                        <Outlet />
                    </div>

                    {location.pathname !== '/vendor-dashboard/orders' && (
                        <MessageSidebar />
                    )}
                </div>
            </div>
        </div>
    )
}

export default VendorDashboard
