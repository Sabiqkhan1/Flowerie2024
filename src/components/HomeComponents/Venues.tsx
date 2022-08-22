import { Grid, styled } from '@mui/material'
import type { FC } from 'react'
import CityCard from '../cards/CityCard'
import { cities } from '../../assets/data/static/city'
import { CityType, VenueType } from '../../assets/data/types'
import React from 'react'
import VenueCard from '../cards/VenueCard'
import { venues } from '../../assets/data/static/venue'
import cover from '../../assets/images/tool-cover.webp'
import Logo from '../../assets/images/Mesh_Red.png'
import { Link } from 'react-router-dom'
import ContainedButton from '../buttons/ContainedButton'
const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
})

const Venues: FC = (): JSX.Element => {
    return (
        <div
            className="pl-28 py-12 md:pl-20 sm:pl-16 xs:pl-4 xs:pr-4 md:py-14 xs:py-8"
            id="venues"
        >
            <h1 className="font-regular text-black text-3xl xs:text-2xl">
                Explore Venues Nearby
            </h1>
            <section className="my-10 pr-28 xs:my-8 xs:pr-0">
                <Grid
                    container
                    rowSpacing={{ xs: 3, sm: 6 }}
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                >
                    {cities.map((city: CityType, index: React.Key | null) => (
                        <CityCard
                            city={city.city}
                            distance={city.distance}
                            img={city.img}
                            key={index}
                        />
                    ))}
                </Grid>
            </section>
            <section className="pr-28">
                <figure className="relative w-full h-[320px] bg-[#e2e2e2] rounded-3xl overflow-auto">
                    <div className="absolute top-0 w-full h-full">
                        <div className="w-1/2 h-full bg-gradient-to-b from-[rgba(0,0,0,0.41)] float-right px-4 pb-4">
                            <div className="h-full flex flex-col justify-between pt-4">
                                <div>
                                    <section className="flex items-center">
                                        <img
                                            src={Logo}
                                            alt="logo"
                                            className="w-12 h-12 sm:w-12 xs:w-8 sm:h-12 xs:h-8"
                                        />
                                        <h3 className="ml-1 text-3xl text-light-maroon font-semibold">
                                            Flowerie
                                        </h3>
                                    </section>
                                    <h3 className="font-mark text-3xl text-white pl-24 mt-[-12px]">
                                        MoodBoard
                                    </h3>
                                </div>
                                <section>
                                    <p className="font-semibold text-white text-lg max-w-[16rem]">
                                        Use our optimised event planning tool
                                        for your special day.
                                    </p>
                                    <p className="font-semibold text-textBlack my-2">
                                        Manage every detail.
                                    </p>
                                    <div>
                                        <Link
                                            to={`/member-dashboard/${1}`}
                                            className="float-right"
                                        >
                                            <ContainedButton
                                                color="white"
                                                background="bg-dark"
                                            >
                                                Try Free
                                            </ContainedButton>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Img src={cover} />
                </figure>
            </section>
            <h1 className="my-10 font-regular text-black text-3xl xs:text-2xl">
                Luxe Locations
            </h1>
            <div id="scrollable" className="overflow-x-auto no-scroll pb-2">
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                    wrap="nowrap"
                >
                    {venues.map((venue: VenueType, index: React.Key | null) => (
                        <VenueCard
                            venue={venue.venue}
                            img={venue.img}
                            key={index}
                        />
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Venues
