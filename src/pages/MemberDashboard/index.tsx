import React from 'react'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import { Outlet } from 'react-router-dom'
const MemberDashboard = () => {
    const handleSearch = (query: string) => {
        // Implement search logic
        console.log('Search:', query);
    };

    const handleFilter = (filters: any) => {
        // Implement filter logic
        console.log('Filters:', filters);
    };

    return (
        <>
            <SearchNavbar 
                placeholder="Want to discover your dream venue?"
                onSearch={(query) => console.log(query)}
                onFilter={(filters) => console.log(filters)}
            />
            <div className="w-full min-h-screen pt-24 sm:pt-16">
                <Outlet />
            </div>
        </>
    )
}

export default MemberDashboard
