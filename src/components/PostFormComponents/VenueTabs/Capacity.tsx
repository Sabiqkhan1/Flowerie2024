/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/capacity-cover.webp'
import { RootState } from '../../../redux/store'
import PostFormCounter from '../../counters/PostFormCounter'
import { setForm } from '../../../redux/venueForm/venueFormSlice'

type CapacityType = {
    id: number
    name: string
    rooms: number
}

const Capacity: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const dispatch = useDispatch()
    const capacitites_from_redux = useSelector(
        (state: RootState) => state.venueForm.capacities
    )
    const [capacities, setCapacities] = useState<Array<CapacityType>>(
        capacitites_from_redux
    )

    const next = (): void => {
        dispatch(setForm({ name: 'capacities', value: capacities }))
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    const handleRoomChange = (e: any, index: number): void => {
        let newCapacities: Array<CapacityType> = JSON.parse(
            JSON.stringify(capacities)
        )
        newCapacities[index]['rooms'] = parseInt(e.target.value)
        setCapacities(newCapacities)
    }

    const increment = (index: number): void => {
        let newCapacities: Array<CapacityType> = JSON.parse(
            JSON.stringify(capacities)
        )
        newCapacities[index]['rooms'] += 1
        setCapacities(newCapacities)
    }

    const decrement = (index: number): void => {
        const newCapacities: Array<CapacityType> = JSON.parse(
            JSON.stringify(capacities)
        )
        newCapacities[index]['rooms'] -= 1
        setCapacities(newCapacities)
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="What is the capacity of each room?"
        >
            <div className="w-full h-[calc(100vh-200px)] overflow-auto no-scroll flex flex-col">
                <div className="w-3/5 flex-grow flex-col flex items-center justify-center mx-auto">
                    {capacities.map((room: any, index: React.Key) => (
                        <PostFormCounter
                            key={index}
                            counter={room.rooms}
                            onChange={(e) => handleRoomChange(e, room.id)}
                            increment={() => increment(room.id)}
                            decrement={() => decrement(room.id)}
                            label={room.name}
                            limit={false}
                        />
                    ))}
                </div>
            </div>
        </Template>
    )
}

export default Capacity
