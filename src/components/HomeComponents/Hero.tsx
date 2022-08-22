import React from 'react'
import ContainedButton from '../buttons/ContainedButton'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'
import cover from '../../assets/images/home-cover.webp'
import { motion } from 'framer-motion'
const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})
const Hero = (): JSX.Element => {
    return (
        <header className="relative w-full aspect-[1512/700]">
            <div className="absolute top-0 w-full h-full flex flex-col justify-end py-16 px-28 bg-gradient-to-b from-[#c2c2c26e] to-[#000000a1] md:pl-20 sm:pl-16 xs:pl-4">
                <section className="flex flex-col ">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-white font-semibold text-4xl mb-8 max-w-md xs:text-3xl xs:max-w-mobile"
                    >
                        <span className="text-pink">Book</span> and{' '}
                        <span className="text-pink">manage</span> your special
                        occasion in one{' '}
                        <span className="text-pink">centralised</span> place.
                    </motion.h1>
                    <Link to="search" className="w-max">
                        <ContainedButton
                            fontSize={18}
                            color="black"
                            background="bg-white"
                            fontFamily="medium"
                        >
                            Explore Now
                        </ContainedButton>
                    </Link>
                </section>
            </div>
            <Img src={cover} />
        </header>
    )
}

export default Hero
