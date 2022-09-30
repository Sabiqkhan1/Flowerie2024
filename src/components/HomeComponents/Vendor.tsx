import React from 'react'
import { Link } from 'react-router-dom'
import ContainedButton from '../buttons/ContainedButton'
import { Img } from '../common/Img'
import cover from '../../assets/images/vendor-cover.webp'

const Vendor: React.FC = (): JSX.Element => {
    return (
        <div
            className="pl-28 py-12 md:pl-16 sm:pl-8 xs:pl-4 xs:pr-4 md:py-14 xs:py-8"
            id="venues"
        >
            {/* <section className="px-28 sm:pl-16 sm:pr-6  xs:pl-8 xs:pr-3 "> */}
            <section className="pr-28 md:pr-16 sm:pr-8 xs:pr-4  ">
                <figure className="relative w-full h-[320px] bg-[#e2e2e2] rounded-3xl overflow-auto sm:h-[200px]">
                    <div className="absolute top-0 w-full h-full pt-20 pb-8 px-8 flex flex-col justify-between sm:pt-8">
                        <section>
                            <h3 className="font-semibold text-4xl  text-white sm:text-2xl">
                                Become a vendor
                            </h3>
                            <sub className="font-semibold text-lg text-white">
                                Earn extra income by sharing your services.
                            </sub>
                        </section>
                        <section>
                            <Link to="vendor-dashboard" className="float-left">
                                <ContainedButton
                                    background="bg-dark"
                                    color="white"
                                    fontSize={20}
                                >
                                    Learn More
                                </ContainedButton>
                            </Link>
                        </section>
                    </div>
                    <Img src={cover} />
                </figure>
            </section>
        </div>
    )
}

export default Vendor
