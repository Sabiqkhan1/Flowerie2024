import HostHero from '../../components/HostComponents/HostHero'
import SpecialServices from '../../components/HostComponents/SpecialServices'
import HostVendor from '../../components/HostComponents/HostVendor'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import MainFooter from '../../components/footers/MainFooter'
const Host = (): JSX.Element => {
    return (
        <>
            <LoginModal />
            <SignupModal />
            <SearchNavbar placeholder="Want to discover your dream venue?" />
            <HostHero />
            <SpecialServices />
            <HostVendor />
            <MainFooter space="mt-36" />
        </>
    )
}

export default Host
