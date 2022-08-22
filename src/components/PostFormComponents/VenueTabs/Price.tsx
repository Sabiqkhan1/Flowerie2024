/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/price-cover.webp'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { DateRangePicker, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '../../../styles/Price.css'
const Price: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const navigate = useNavigate()
    const [date, setDate] = useState<Array<Range>>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: '#AEE2D6',
        },
    ])
    const next = (): void => {
        navigate('/post-form/category')
    }

    const back = (): void => {
        prevStep()
    }

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="Now for the fun part, let’s price your service!"
        >
            <div className="w-full h-[calc(100vh-191px)] overflow-auto thin-scroll">
                <div className="px-4">
                    <div>
                        <label className="font-regular mb-1 text-lg">
                            Set your base price
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="bg-[#FBFBFB] w-full px-4 py-2 border border-[rgba(0,0,0,0.6)] rounded-md focus-visible:outline-none font-regular text-sm"
                        />
                    </div>
                    <div className="my-4">
                        <h4 className="font-regular text-lg">
                            You can set different prices depending on the day.
                        </h4>
                        <p className="font-regular text-xs text-[#948d8d]">
                            We recommend to have a good pricing stratergy by not
                            diviating too highly form the base price
                        </p>
                    </div>
                    <Divider sx={{ borderColor: '#817E7E' }} />
                    <div className="flex my-8">
                        <div className="w-1/2 flex flex-col mr-8">
                            <p className="min-h-[56px] font-regular text-center text-lg ">
                                Weekend price <br /> increase/decrease
                            </p>
                            <div className="flex mt-4">
                                <div className="w-1/2 flex flex-col mr-2">
                                    <label className="font-regular text-sm">
                                        Saturday
                                    </label>
                                    <div className="w-full flex border border-[rgba(0,0,0,0.6)] rounded-sm">
                                        <input className="w-full p-2 rounded-sm focus-visible:outline-none text-center" />
                                        <button className="flex justify-center items-center border-l border-l-[rgba(0,0,0,0.6)] p-2">
                                            <ArrowUpwardIcon
                                                sx={{
                                                    transform: 'rotate(225deg)',
                                                    color: '#ACACAD',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col ml-1">
                                    <label className="font-regular text-sm">
                                        Sunday
                                    </label>
                                    <div className="w-full flex border border-[rgba(0,0,0,0.6)] rounded-sm">
                                        <input className="w-full p-2 rounded-sm focus-visible:outline-none text-center" />
                                        <button className="flex justify-center items-center border-l border-l-[rgba(0,0,0,0.6)] p-2">
                                            <ArrowUpwardIcon
                                                sx={{
                                                    transform: 'rotate(45deg)',
                                                    color: '#ACACAD',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col ml-8">
                            <p className="min-h-[56px] font-regular text-center text-lg ">
                                Day price <br /> increase/decrease
                            </p>
                            <div className="flex mt-4">
                                <div className="w-1/2 flex flex-col mr-2">
                                    <label className="font-regular text-sm">
                                        Day
                                    </label>
                                    <div className="w-full flex border border-[rgba(0,0,0,0.6)] rounded-sm">
                                        <input className="w-full p-2 rounded-sm focus-visible:outline-none text-center" />
                                        <button className="flex justify-center items-center border-l border-l-[rgba(0,0,0,0.6)] p-2">
                                            <ArrowUpwardIcon
                                                sx={{
                                                    transform: 'rotate(225deg)',
                                                    color: '#ACACAD',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col ml-1">
                                    <label className="font-regular text-sm">
                                        Evening
                                    </label>
                                    <div className="w-full flex border border-[rgba(0,0,0,0.6)] rounded-sm">
                                        <input className="w-full p-2 rounded-md focus-visible:outline-none text-center" />
                                        <button className="flex justify-center items-center border-l border-l-[rgba(0,0,0,0.6)] p-2">
                                            <ArrowUpwardIcon
                                                sx={{
                                                    transform: 'rotate(45deg)',
                                                    color: '#ACACAD',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider sx={{ borderColor: '#817E7E' }} />
                    <h5 className="text-center font-regular mt-4">
                        Specific Date
                    </h5>
                    <div className="text-center my-4">
                        <DateRangePicker
                            moveRangeOnFirstSelection={false}
                            onChange={(item) => setDate([item.selection])}
                            months={2}
                            direction="horizontal"
                            ranges={date}
                            showMonthAndYearPickers={true}
                            showDateDisplay={false}
                            showPreview={true}
                            editableDateInputs={true}
                            className="price-date-range"
                            weekdayDisplayFormat="E"
                        />
                    </div>
                    <div className="text-center">
                        <label className="font-regular text-sm mr-4">
                            Price
                        </label>
                        <input className="px-2 text-sm py-1 border border-[rgba(0,0,0,0.6)] rounded-[4px]  focus-visible:outline-none" />
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Price
