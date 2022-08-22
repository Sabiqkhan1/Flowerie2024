import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Venues from '../../components/HomeComponents/Venues'
import Vendor from '../../components/HomeComponents/Vendor'
import Navbar from '../../components/navbars/Navbar'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import MainFooter from '../../components/footers/MainFooter'
const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Hero />
            <Venues />
            <Vendor />
            <LoginModal />
            <SignupModal />
            <MainFooter space="mt-36" />
        </>
    )
}

export default Home
