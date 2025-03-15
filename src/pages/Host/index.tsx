import { useState } from 'react';
import HostHero from '../../components/HostComponents/HostHero'
import SpecialServices from '../../components/HostComponents/SpecialServices'
import HostVendor from '../../components/HostComponents/HostVendor'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import MainFooter from '../../components/footers/MainFooter'
import { FilterOptions } from '../../assets/data/interfaces'
import { ModalWrapper } from '../../components/modals/ModalWrapper'

const Host = (): JSX.Element => {
    const handleSearch = (query: string) => {
        console.log('Search:', query);
    };

    const handleFilter = (filters: FilterOptions) => {
        console.log('Filters:', filters);
    };

    return (
        <ModalWrapper>
            <SearchNavbar 
                placeholder="Want to discover your dream venue?"
                onSearch={handleSearch}
                onFilter={handleFilter}
            />
            <HostHero />
            <SpecialServices />
            <HostVendor />
            <MainFooter space="mt-36" />
        </ModalWrapper>
    );
};

export default Host
