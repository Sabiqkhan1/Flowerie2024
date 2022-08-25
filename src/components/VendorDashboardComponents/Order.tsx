import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import OrderCollapse from '../collapses/OrderCollapse'
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
const minDate = new Date()

const Order: React.FC = (): JSX.Element => {
    const [date, setDate] = React.useState<Date | null>(new Date())

    return (
        <div className="flex pr-4">
            <div className="flex-grow">
                <div className="flex items-center">
                    <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-2xl" />
                    <span className="text-[#FFA14E] font-bold text-lg ml-3">
                        Hey Anddy! Here are your Upcoming Orders
                    </span>
                </div>
                <div className="mt-4">
                    <OrderCollapse />
                    <OrderCollapse />
                </div>
            </div>
            <div className="w-72 pt-8">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CalendarPicker
                        className="calendar-picker"
                        minDate={minDate}
                        date={date}
                        onChange={(newDate) => setDate(newDate)}
                    />
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default Order
