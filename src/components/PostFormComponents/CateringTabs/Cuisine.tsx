import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/cuisine-cover.webp'
import { RootState } from '../../../redux/store'
import { setForm } from '../../../redux/cateringForm/cateringFormSlice'
import CuisineSelect from '../../select/CuisineSelect'
import { SelectChangeEvent } from '@mui/material/Select'
const Cuisine: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const dispatch = useDispatch()
    const cuisine_from_redux = useSelector(
        (state: RootState) => state.cateringForm.cuisine
    )
    const [cuisine, setCuisine] = useState<string>(cuisine_from_redux)

    const handleChange = (event: SelectChangeEvent) => {
        setCuisine(event.target.value)
    }
    const next = (): void => {
        dispatch(setForm({ name: 'cuisine', value: cuisine }))
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="What cuisine describes your food best?"
        >
            <div className="w-full h-[calc(100vh-190px)] overflow-auto thin-scroll">
                <div className="px-8 text-center">
                    <h3 className="font-semibold text-[#858585] my-4 text-lg">
                        Pick cuisine
                    </h3>
                    <CuisineSelect value={cuisine} onChange={handleChange} />
                </div>
            </div>
        </Template>
    )
}

export default Cuisine
