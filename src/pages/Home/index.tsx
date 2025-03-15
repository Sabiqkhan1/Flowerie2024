import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Venues from '../../components/HomeComponents/Venues'
import Vendor from '../../components/HomeComponents/Vendor'
import Navbar from '../../components/navbars/Navbar'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import MainFooter from '../../components/footers/MainFooter'
import { ModalWrapper } from '../../components/modals/ModalWrapper'
import SearchNavbar from '../../components/navbars/SearchNavbar'

const Home = (): JSX.Element => {
    const handleSearch = (query: string) => {
        // Implement search logic
    };

    const handleFilter = (filters: any) => {
        // Implement filter logic
    };

    return (
        <ModalWrapper>
            <SearchNavbar 
                placeholder="Want to discover your dream venue?"
                onSearch={handleSearch}
                onFilter={handleFilter}
            />
            <Venues />
            <Vendor />
            <MainFooter space="mt-36" />
        </ModalWrapper>
    )
}

export default Home
