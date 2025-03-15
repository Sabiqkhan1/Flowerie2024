import React from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import Ring from '../../assets/svg/Ring.svg'
import Heart from '../../assets/svg/Heart.svg'
const OverviewList = () => {
    return (
        <section className="flex my-4 mx-auto w-11/12 bg-commonLight border border-gray rounded-lg sm:w-full">
            <div className="w-1/3 py-4 px-4 border-r border-r-gray sm:px-2 xs:px-1">
                <h2 className="text-black font-medium uppercase text-center   sm:text-[0.90rem] xs:text-[0.80rem] sm:h-[45px] sm:py-2">
                    Reception
                </h2>
                <div className="flex sm:flex-col ">
                    <div className="pr-4 flex items-center justify-center sm:pr-0 sm:pt-2 ">
                        <GiPartyPopper className="text-4xl text-textBlack " />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center sm:flex-col">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl sm:text-[1.50rem] ">
                                    23
                                </p>
                                <small className="font-medium text-black text-16 sm:text-[1.10rem] ">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        23
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 py-4 px-4 border-r border-r-gray sm:px-2 xs:px-1">
                <h2 className="text-black font-medium uppercase text-center  sm:text-[0.90rem] xs:text-[0.80rem] sm:h-[45px] sm:py-2 ">
                    Ceremony
                </h2>
                <div className="flex sm:flex-col">
                    <div className="pr-4 flex items-center justify-center sm:pr-0 sm:pt-2">
                        <img src={Ring} alt="Ring" className="w-9 h-9" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center sm:flex-col">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl sm:text-[1.50rem] ">
                                    23
                                </p>
                                <small className="font-medium text-black text-16 sm:text-[1.10rem] ">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        23
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 py-4 px-4 sm:px-2 xs:px-1">
                <h2 className="text-black font-medium uppercase text-center  sm:text-[0.90rem] xs:text-[0.80rem] sm:h-[45px]">
                    Wedding Breakfast
                </h2>
                <div className="flex sm:flex-col">
                    <div className="pr-4 flex items-center justify-center sm:pr-0 sm:pt-2">
                        <img src={Heart} alt="Ring" className="w-9 h-9" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center sm:flex-col">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl sm:text-[1.50rem] ">
                                    23
                                </p>
                                <small className="font-medium text-black text-16 sm:text-[1.10rem] ">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        23
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3 sm:mr-2 sm:text-[0.90rem] xs:text-[0.70rem]">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg sm:text-[0.90rem] xs:text-[0.80rem] ">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverviewList
