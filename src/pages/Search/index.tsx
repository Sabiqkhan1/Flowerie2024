import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SearchNavbar from '../../components/navbars/SearchNavbar';
import MainFooter from '../../components/footers/MainFooter';
import FilterSection from '../../components/SearchQueryPageComponents/FilterSection';
import SearchHeader from '../../components/SearchQueryPageComponents/SearchHeader';
import SearchResultsSection from '../../components/SearchQueryPageComponents/SearchResults';
import MapSection from '../../components/SearchQueryPageComponents/MapSection';
import { ModalWrapper } from '../../components/modals/ModalWrapper';
import { FilterTagType } from '../../assets/data/types';

const Search: React.FC = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [filterTags, setFilterTags] = useState<FilterTagType[]>([]);
    const [viewport, setViewport] = useState({
        latitude: 42.3602534,
        longitude: -71.0582912,
        zoom: 13,
        width: '100%',
        height: '100%',
    });
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const handleDropDownOpen = (event: React.MouseEvent<HTMLButtonElement | null>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropDownClose = () => {
        setAnchorEl(null);
    };

    const handleFilterSelect = (tag: FilterTagType) => {
        let newFilterTags = [...filterTags];
        if (newFilterTags.some((t) => t.id === tag.id)) {
            newFilterTags = newFilterTags.filter((t) => t.id !== tag.id);
        } else {
            newFilterTags.push(tag);
        }
        setFilterTags(newFilterTags);
    };

    const dropDownOpen: boolean = Boolean(anchorEl);
    const id: string | undefined = dropDownOpen ? 'nav-dropdown' : undefined;

    const handleSearch = (query: string) => {
        // Implement search logic
        console.log('Search:', query);
    };

    const handleFilter = (filters: any) => {
        // Implement filter logic
        console.log('Filters:', filters);
    };

    const handleModalSuccess = () => {
        setIsLoginOpen(false);
        setIsSignupOpen(false);
    };

    return (
        <ModalWrapper>
            <SearchNavbar 
                placeholder="Want to discover your dream venue?"
                onSearch={handleSearch}
                onFilter={handleFilter}
            />
            <div className="w-full mt-24 relative">
                <Grid container>
                    <Grid item lg={8} md={9} xs={12}>
                        <div className="w-full h-[calc(100vh-96px)] overflow-auto thin-scroll p-8 sm:p-4">
                            <FilterSection
                                anchorEl={anchorEl}
                                handleDropDownOpen={handleDropDownOpen}
                                handleDropDownClose={handleDropDownClose}
                                dropDownOpen={dropDownOpen}
                                filterTags={filterTags}
                                handleFilterSelect={handleFilterSelect}
                                id={id}
                            />
                            <SearchHeader />
                            <SearchResultsSection />
                        </div>
                    </Grid>
                    <Grid item lg={4} md={3} sm={8} xs={10}>
                        <MapSection viewport={viewport} />
                    </Grid>
                </Grid>
                <MainFooter space="mt-0" />
            </div>
        </ModalWrapper>
    );
};

export default Search;
