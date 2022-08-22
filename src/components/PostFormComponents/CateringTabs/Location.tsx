/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import Template from '../Template'
import cover from '../../../assets/images/location-cover.jpg'
import Map from 'react-map-gl'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocationModal from '../../modals/LocationModal'
const Location: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const [manualForm, setManualForm] = useState<boolean>(false)
    const [viewport, setViewport] = useState({
        latitude: 42.3602534,
        longitude: -71.0582912,
        zoom: 13,
        width: '100%',
        height: '100%',
    })

    const next = (): void => {
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    const toggle = (): void => {
        setManualForm(!manualForm)
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="Where are you located?"
        >
            <div className="w-full h-full relative">
                <Map
                    initialViewState={{ ...viewport }}
                    mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    mapStyle="mapbox://styles/hrkhan29/cl3e357p9002u14qcmeodt95e"
                    attributionControl={false}
                />
                {!manualForm ? (
                    <div className="w-full absolute top-1/2  translate-x-0 translate-y-[-50%] flex items-center justify-center">
                        <div className="w-3/5 flex flex-col">
                            <form className="w-full p-4 bg-white rounded-3xl flex items-center border border-black/20">
                                <input
                                    placeholder="Enter location"
                                    className="w-full font-light focus-visible:outline-none"
                                />
                                <LocationOnIcon sx={{ color: '#E55550' }} />
                            </form>
                            <button
                                onClick={toggle}
                                className="w-max px-4 py-3 bg-white border border-t-0 border-black/20 rounded-b-2xl ml-6 font-semibold text-sm underline underline-offset-2"
                            >
                                Enter manually
                            </button>
                        </div>
                    </div>
                ) : (
                    <LocationModal toggle={toggle} open={manualForm} />
                )}
            </div>
        </Template>
    )
}

export default Location
