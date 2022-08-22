import React from 'react'
import { Link } from 'react-router-dom'
import ContainedButton from '../buttons/ContainedButton'
import { Img } from '../common/Img'
import cover from '../../assets/images/vendor-cover.webp'

const Vendor: React.FC = (): JSX.Element => {
    return (
        <section className="px-28">
            <figure className="relative w-full h-[320px] bg-[#e2e2e2] rounded-3xl overflow-auto">
                <div className="absolute top-0 w-full h-full pt-20 pb-8 px-8 flex flex-col justify-between">
                    <section>
                        <h3 className="font-semibold text-4xl text-white">
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
    )
}

export default Vendor
