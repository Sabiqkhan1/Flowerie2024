/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import Grid from '@mui/material/Grid'
import FilterButton from '../../components/buttons/FilterButton'
import FilterTag from '../../components/chips/FilterTag'
import SearchCard from '../../components/cards/SearchCard'
import { searchData } from '../../assets/data/static/searchData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FilterDropDown from '../../components/popovers/FilterDropDown'
import { FilterTagType } from '../../assets/data/types'
import Map from 'react-map-gl'
import AddIcon from '@mui/icons-material/Add'
import MainFooter from '../../components/footers/MainFooter'
const Search: React.FC = (): JSX.Element => {
    const matchesMobile = useMediaQuery('(max-width: 500px)')
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [filterTags, setFilterTags] = useState<Array<FilterTagType>>([
        {
            id: 0,
            label: 'Parking',
            value: 'parking',
        },
        {
            id: 1,
            label: 'Disability access',
            value: 'disability_access',
        },
        {
            id: 2,
            label: 'Pets allowed',
            value: 'pets_allowed',
        },
    ])
    const [viewport, setViewport] = useState({
        latitude: 42.3602534,
        longitude: -71.0582912,
        zoom: 13,
        width: '100%',
        height: '100%',
    })

    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const handleFilterSelect = (tag: FilterTagType) => {
        let newFilterTags = [...filterTags]
        if (newFilterTags.some((t) => t.id === tag.id)) {
            newFilterTags = newFilterTags.filter((t) => t.id !== tag.id)
        } else {
            newFilterTags.push(tag)
        }
        setFilterTags(newFilterTags)
    }
    const dropDownOpen: boolean = Boolean(anchorEl)
    const id: string | undefined = dropDownOpen ? 'nav-dropdown' : undefined

    return (
        <>
            <SearchNavbar placeholder="Want to discover your dream venue?" />
            <LoginModal />
            <SignupModal />
            <div className="w-full mt-24 relative ">
                <Grid container>
                    <Grid item lg={8}>
                        <div className="w-full h-[calc(100vh-96px)] overflow-auto thin-scroll p-8 sm:p-4 sm:w-6/12">
                            <div className="bg-white">
                                <div className="flex w-full">
                                    <div id="container">
                                        <FilterButton
                                            id="tag"
                                            onClick={handleDropDownOpen}
                                            aria-describedby={id}
                                        >
                                            <div className="flex items-center">
                                                Add Filters{' '}
                                                <AddIcon
                                                    sx={{
                                                        fontSize: {
                                                            sm: 16,
                                                        },
                                                        ml: 1,
                                                    }}
                                                />
                                            </div>
                                        </FilterButton>
                                        <FilterDropDown
                                            id={id}
                                            open={dropDownOpen}
                                            anchorEl={anchorEl}
                                            handleClose={handleDropDownClose}
                                            tagList={filterTags}
                                            handleChange={handleFilterSelect}
                                        />
                                    </div>
                                    <div className="ml-6 flex flex-wrapno-scroll xs:flex-nowrap xs:overflow-auto ">
                                        {filterTags.map((tag, index) => (
                                            <FilterTag
                                                key={index}
                                                tag={tag}
                                                handleDelete={
                                                    handleFilterSelect
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="font-regular text-black text-xl my-2 xs:text-sm">
                                    245+ results - 22nd Aug, 2022 for 400 +
                                    guests
                                </div>
                                <h1 className="font-extrabold text-black text-3xl xs:text-2xl">
                                    Venues in London
                                </h1>
                                <div>
                                    {searchData.map((search, index) => (
                                        <SearchCard key={index} tag={search} />
                                    ))}
                                </div>
                                <div>
                                    <Stack>
                                        <Pagination
                                            size={
                                                matchesMobile
                                                    ? 'small'
                                                    : 'large'
                                            }
                                            color="neutral"
                                            sx={{
                                                '& .MuiPagination-ul': {
                                                    justifyContent: 'center',
                                                },
                                            }}
                                            count={10}
                                            renderItem={(item) => (
                                                <PaginationItem
                                                    components={{
                                                        previous: ArrowBackIcon,
                                                        next: ArrowForwardIcon,
                                                    }}
                                                    {...item}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4}>
                        <div className="w-full h-[calc(100vh-96px)]">
                            <Map
                                initialViewState={{ ...viewport }}
                                mapboxAccessToken={
                                    process.env.REACT_APP_MAP_TOKEN
                                }
                                style={{ width: '100%', height: '100%' }}
                                mapStyle="mapbox://styles/hrkhan29/cl2z24gbn004b15mx4f8zxv3a"
                                attributionControl={false}
                            />
                        </div>
                    </Grid>
                </Grid>
                <MainFooter space="mt-0" />
            </div>
        </>
    )
}

export default Search
