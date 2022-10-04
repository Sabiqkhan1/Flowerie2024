import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/room-cover.webp'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import PostFormCounter from '../../counters/PostFormCounter'
import { setForm } from '../../../redux/venueForm/venueFormSlice'
import { RootState } from '../../../redux/store'

type CapacityType = {
    id: number
    name: string
    rooms: number
}

const Room: React.FC<TabProps> = ({ nextStep }): JSX.Element => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const rooms_from_reducer = useSelector(
        (state: RootState) => state.venueForm.rooms
    )
    const [rooms, setRooms] = useState<number>(rooms_from_reducer)

    const makeRooms = () => {
        let newCapacities: Array<CapacityType> = []
        for (let i = 0; i < rooms; i++) {
            newCapacities.push({
                id: i,
                name: `Room ${i + 1}`,
                rooms: 0,
            })
        }
        dispatch(setForm({ name: 'capacities', value: newCapacities }))
    }

    const next = (): void => {
        dispatch(setForm({ name: 'rooms', value: rooms }))
        makeRooms()
        nextStep()
    }

    const back = (): void => {
        navigate('/post-form/category')
    }

    const handleRoomChange = (e: any): void => {
        setRooms(parseInt(e.target.value))
    }

    const increment = (): void => {
        setRooms((prevRoom: number) => prevRoom + 1)
    }

    const decrement = (): void => {
        setRooms((prevRoom: number) => prevRoom - 1)
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="How many rooms does your venue offer?"
        >
            <div className="w-full h-full flex flex-col">
                <div className="w-3/5 flex-grow flex items-center justify-center mx-auto sm:mt-10">
                    <PostFormCounter
                        counter={rooms}
                        onChange={handleRoomChange}
                        increment={increment}
                        decrement={decrement}
                        label="Enter amount of rooms"
                        limit={false}
                    />
                </div>
                <div className="text-right px-4 py-2">
                    <AnnouncementIcon sx={{ fontSize: 16, color: '#F9D978' }} />
                    <p className="font-semibold text-xs">
                        Please regard outdoor hosting space as a seperate room
                    </p>
                </div>
            </div>
        </Template>
    )
}

export default Room
