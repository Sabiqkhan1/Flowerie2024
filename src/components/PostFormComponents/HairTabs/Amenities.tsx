import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/amenities-cover.webp'
import { amenities } from '../../../assets/data/static/amenities'
import AmenityCard from '../../cards/AmenityCard'
import { RootState } from '../../../redux/store'
import { setForm } from '../../../redux/decorForm/decorFormSlice'
const Amenities: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const amenities_from_redux = useSelector(
        (state: RootState) => state.venueForm.amenities
    )
    const [selectedAmenities, setSelectedAmenities] =
        useState<Array<number>>(amenities_from_redux)
    const dispatch = useDispatch()

    const next = (): void => {
        dispatch(setForm({ name: 'amenities', value: selectedAmenities }))
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    const handleAmenitySelect = (id: number) => {
        const newSelectedAmenity: Array<number> = JSON.parse(
            JSON.stringify(selectedAmenities)
        )
        if (newSelectedAmenity.includes(id)) {
            newSelectedAmenity.splice(
                newSelectedAmenity.findIndex((value: number) => value === id),
                1
            )
        } else {
            newSelectedAmenity.push(id)
        }
        setSelectedAmenities(newSelectedAmenity)
    }

    const isSelected = (id: number): boolean => {
        if (selectedAmenities.includes(id)) {
            return true
        }
        return false
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="What do you specialise in?"
        >
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-[calc(100vh-190px)] overflow-auto px-2">
                    <div className="flex flex-wrap">
                        {amenities.map((amenity, index) => (
                            <AmenityCard
                                key={index}
                                id={amenity.id}
                                selected={isSelected(amenity.id)}
                                label={amenity.label}
                                icon={amenity.icon}
                                handleAmenitySelect={handleAmenitySelect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Amenities
