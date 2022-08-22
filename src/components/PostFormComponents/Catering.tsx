import React, { useState } from 'react'
import Location from './CateringTabs/Location'
import Scene from './CateringTabs/Scene'
import Gallery from './CateringTabs/Gallery'
import Price from './CateringTabs/Price'
import Quantity from './CateringTabs/Quantity'
import Cuisine from './CateringTabs/Cuisine'

const Catering: React.FC = (): JSX.Element => {
    const [step, setStep] = useState<number>(1)

    const nextStep = (): void => {
        setStep((prevStep) => prevStep + 1)
    }
    const prevStep = (): void => {
        setStep((prevStep) => prevStep - 1)
    }

    const renderStep = () => {
        if (step === 1) {
            return <Quantity nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 2) {
            return <Location nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 3) {
            return <Cuisine nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 4) {
            return <Scene nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 5) {
            return <Gallery nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 6) {
            return <Price nextStep={nextStep} prevStep={prevStep} />
        }
    }

    return <>{renderStep()}</>
}

export default Catering
