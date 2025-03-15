import React, { useState } from 'react'
import Location from './DecorTabs/Location'
import Amenities from './DecorTabs/Amenities'
import Scene from './DecorTabs/Scene'
import Gallery from './DecorTabs/Gallery'
import Price from './DecorTabs/Price'

const Decor: React.FC = (): JSX.Element => {
    const [step, setStep] = useState<number>(1)

    const nextStep = (): void => {
        setStep((prevStep) => prevStep + 1)
    }
    const prevStep = (): void => {
        setStep((prevStep) => prevStep - 1)
    }

    const renderStep = () => {
        if (step === 1) {
            return <Location nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 2) {
            return <Amenities nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 3) {
            return <Scene nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 4) {
            return <Gallery nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 5) {
            return <Price nextStep={nextStep} prevStep={prevStep} />
        }
    }

    return <>{renderStep()}</>
}

export default Decor
