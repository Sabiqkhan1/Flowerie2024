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
        <header className="relative w-full h-[calc(100vh-110px)] md:h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)] xs:h-[calc(100vh-40vh)]">
            <div className="absolute top-0 w-full h-full flex flex-col justify-end py-16 px-28 bg-gradient-to-b from-[#c2c2c26e] to-[#000000a1] xs:px-4 sm:px-8 md:px-14 sm:py-4">
                <section className="flex flex-col max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-white font-semibold text-4xl leading-tight mb-8 md:mb-6 md:text-3xl sm:text-2xl"
                    >
                        <span className="text-pink">Book</span> and{' '}
                        <span className="text-pink">manage</span> your
                        <br /> special occasion in one
                        <br />
                        <span className="text-pink">centralised</span> place.
                    </motion.h1>
                    <Link to="search" className="w-max">
                        <ContainedButton
                            fontSize={18}
                            color="black"
                            background="bg-white hover:bg-gray-50"
                            fontFamily="medium"
                            className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
                        >
                            Explore Now
                        </ContainedButton>
                    </Link>
                </section>
            </div>
            <Img 
                src={cover} 
                alt="Hero background"
                className="object-cover object-center"
            />
        </header>
    )
}

export default Hero

