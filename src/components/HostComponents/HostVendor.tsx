import React from 'react'
import { Link } from 'react-router-dom'
import ContainedButton from '../buttons/ContainedButton'
import { Img } from '../common/Img'
import cover from '../../assets/images/host-vendor-cover.webp'

const HostVendor: React.FC = (): JSX.Element => {
    return (
        <section className="px-28">
            <figure className="relative w-full h-[320px] bg-[#e2e2e2] rounded-3xl overflow-auto">
                <div className="absolute top-0 w-full h-full pt-8 pb-24 px-8 flex flex-col justify-between">
                    <section>
                        <h3 className="font-semibold text-5xl text-white">
                            Become a vendor
                        </h3>
                        <small className="font-semibold text-[16px] text-white">
                            Earn extra income by sharing your services.
                        </small>
                    </section>
                    <section>
                        <Link to="vendor-dashboard" className="float-left">
                            <ContainedButton
                                background="bg-[#C6A6A6]"
                                color="black"
                                fontSize={16}
                            >
                                Sign up
                            </ContainedButton>
                        </Link>
                    </section>
                </div>
                <Img src={cover} />
            </figure>
        </section>
    )
}

export default HostVendor
