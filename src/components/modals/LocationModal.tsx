import React from 'react'
import { Grow } from '@mui/material'
import LocationInput from '../inputs/LocationInput'
export interface LocationModalProps {
    open: boolean
    toggle(): void
}

const LocationModal: React.FC<LocationModalProps> = ({
    toggle,
    open,
}): JSX.Element => {
    return (
        <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.25)] flex items-center justify-center">
            <Grow in={open} {...(open ? { timeout: 500 } : {})}>
                <div className="w-1/2 px-3 py-2 bg-[#F4F4F4] rounded-2xl shadow-lg">
                    <h3 className="text-center font-semibold text-black my-1">
                        Confirm your address
                    </h3>
                    <LocationInput placeholder="First line of address/Flat number" />
                    <LocationInput placeholder="Street" />
                    <LocationInput placeholder="City" />
                    <LocationInput placeholder="Postal code" />
                    <div className="text-right">
                        <button
                            onClick={toggle}
                            className="bg-gradient-to-r from-[rgba(90,163,78,0.41)] to-[rgba(73,91,185,1)] p-3 rounded-xl text-white font-semibold text-sm"
                        >
                            Looks good!
                        </button>
                    </div>
                </div>
            </Grow>
        </div>
    )
}

export default LocationModal
