import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Mesh_Red.png'
import ContainedButton from '../buttons/ContainedButton'
const Tool: React.FC = (): JSX.Element => {
    return (
        <div
            className=" bg-tool max-h-hero-max bg-no-repeat bg-cover bg-center mb-24 sm:mb-16 xs:mb-12"
            id="suppliers"
        >
            <div className=" w-full h-full bg-white/30 px-28 md:px-20 sm:px-16 xs:px-4">
                <div className="flex flex-col pt-4">
                    <div className="flex items-center ">
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-16 h-16 sm:w-12 xs:w-8 sm:h-12 xs:h-8"
                        />
                        <span className="ml-3 sm:ml-2 xs:ml-1 text-5xl sm:text-4xl xs:text-3xl text-light-maroon font-semibold">
                            Flowerie
                        </span>
                    </div>
                    <div className="font-mark text-5xl sm:text-4xl xs:text-3xl text-black pl-52 sm:pl-36 xs:pl-28">
                        MoodBoard
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="flex flex-col mt-8 mb-8">
                            <h1 className="text-black text-5xl xs:text-3xl font-semibold max-w-[34rem] xs:max-w-[23rem] leading-11">
                                Use our optimised event planning tool for your
                                special day.
                            </h1>
                            <span className="font-regular text-helper text-xl my-4">
                                Manage every detail.
                            </span>

                            <Link to="mood-board">
                                <ContainedButton
                                    color="white"
                                    background="bg-dark"
                                >
                                    Try Free
                                </ContainedButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool
