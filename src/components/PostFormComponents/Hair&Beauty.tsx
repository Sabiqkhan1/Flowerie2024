import React, { useState } from 'react'
import Scene from './HairTabs/Scene'
import Amenities from './HairTabs/Amenities'
const Hair: React.FC = (): JSX.Element => {
    const [step, setStep] = useState<number>(1)

    const nextStep = (): void => {
        setStep((prevStep) => prevStep + 1)
    }
    const prevStep = (): void => {
        setStep((prevStep) => prevStep - 1)
    }

    const renderStep = () => {
        if (step === 1) {
            return <Scene nextStep={nextStep} prevStep={prevStep} />
        }
        if (step === 2) {
            return <Amenities nextStep={nextStep} prevStep={prevStep} />
        }
    }

    return <>{renderStep()}</>
}

export default Hair
