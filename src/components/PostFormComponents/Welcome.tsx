import { Grid, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../../assets/images/post-home.jpg'

const Img = styled('img')({
    display: 'block',
    width: '100%',
    maxHeight: '100vh',
    objectFit: 'cover',
})

const Welcome: React.FC = (): JSX.Element => {
    return (
        <div className="h-screen w-full">
            <Grid container sx={{ height: '100%' }}>
                <Grid item lg={6}>
                    <Img src={cover} alt="cover" />
                </Grid>
                <Grid item lg={6}>
                    <div className="h-full bg-black p-4 flex flex-col">
                        <div className="text-right">
                            <Link to="/vendor-dashboard">
                                <button className="bg-[rgba(126,119,119,0.29)] px-5 py-2 rounded-2xl text-white font-semibold hover:bg-[rgba(104,101,101,0.29)] transition-colors duration-300">
                                    Exit
                                </button>
                            </Link>
                        </div>
                        <div className="flex-grow flex justify-center items-center flex-col">
                            <p className="text-white font-semibold text-4xl text-center max-w-sm">
                                Become a Vendor in a few easy steps.
                            </p>
                            <p className="text-white font-semibold text-lg text-center max-w-xs mt-6">
                                Join the family. We'll guide you every step of
                                the way.
                            </p>
                        </div>
                        <div className="text-right">
                            <Link to="category">
                                <button className="bg-gradient-to-r from-[rgba(223,90,170,1)] to-[rgba(52,108,191,0.62)] px-5 py-3 rounded-2xl text-white font-semibold">
                                    Let's go
                                </button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome
