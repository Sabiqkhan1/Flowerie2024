import React from 'react'
import { useLocation } from 'react-router-dom'
import type { NavLinksProps } from '../../assets/data/interfaces'
import { motion } from 'framer-motion'
const NavLink = ({ href, label }: NavLinksProps): JSX.Element => {
    const location = useLocation()
    let match = location.hash === href
    return (
        <div className="font-medium white md:text-sm text-xl flex flex-col items-center mx-8">
            <a href={href}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {label}
                </motion.span>
            </a>
            {match && (
                <div className="w-[3rem] h-1 bg-white rounded-full mt-0.5" />
            )}
        </div>
    )
}

export default NavLink
