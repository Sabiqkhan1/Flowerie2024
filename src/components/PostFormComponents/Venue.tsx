import React, { useState } from 'react'
import Room from './VenueTabs/Room'
import Capacity from './VenueTabs/Capacity'
import Location from './VenueTabs/Location'
import Amenities from './VenueTabs/Amenities'
import Scene from './VenueTabs/Scene'
import Gallery from './VenueTabs/Gallery'
import Price from './VenueTabs/Price'

const Venue: React.FC = (): JSX.Element => {
    const [step, setStep] = useState<number>(1)

    const nextStep = (): void => {
        setStep((prevStep) => prevStep + 1)
    }
    const prevStep = (): void => {
        setStep((prevStep) => prevStep - 1)
    }

    const renderStep = () => {
        if (step === 1) {
            return <Room nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 2) {
            return <Capacity nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 3) {
            return <Location nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 4) {
            return <Amenities nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 5) {
            return <Scene nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 6) {
            return <Gallery nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 7) {
            return <Price nextStep={nextStep} prevStep={prevStep} />
        }
    }

    return <>{renderStep()}</>
}

export default Venue
