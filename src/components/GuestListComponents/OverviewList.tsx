import React from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import Ring from '../../assets/svg/Ring.svg'
import Heart from '../../assets/svg/Heart.svg'
const OverviewList = () => {
    return (
        <section className="flex my-4 mx-auto w-11/12 bg-commonLight border border-gray rounded-lg">
            <div className="w-1/3 py-4 px-4 border-r border-r-gray">
                <h2 className="text-black font-medium uppercase text-center">
                    Reception
                </h2>
                <div className="flex">
                    <div className="pr-4 flex items-center justify-center">
                        <GiPartyPopper className="text-4xl text-textBlack" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl">
                                    23
                                </p>
                                <small className="font-medium text-black text-16">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg">23</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 py-4 px-4 border-r border-r-gray">
                <h2 className="text-black font-medium uppercase text-center">
                    Ceremony
                </h2>
                <div className="flex">
                    <div className="pr-4 flex items-center justify-center">
                        <img src={Ring} alt="Ring" className="w-9 h-9" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl">
                                    43
                                </p>
                                <small className="font-medium text-black text-16">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg">43</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 py-4 px-4">
                <h2 className="text-black font-medium uppercase text-center">
                    Wedding Breakfast
                </h2>
                <div className="flex">
                    <div className="pr-4 flex items-center justify-center">
                        <img src={Heart} alt="Ring" className="w-9 h-9" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex mt-2 justify-between items-center">
                            <div className="text-center">
                                <p className="font-medium text-black text-3xl">
                                    10
                                </p>
                                <small className="font-medium text-black text-16">
                                    Guests
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Confirmed
                                    </p>
                                    <p className="font-medium text-lg">10</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium mr-3">
                                        Cancelled
                                    </p>
                                    <p className="font-medium text-lg">0</p>
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
