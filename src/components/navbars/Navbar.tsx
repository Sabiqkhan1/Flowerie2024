import React, { useState, useEffect } from 'react'
import NavDropDown from '../popovers/NavDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import MobileNav from '../drawers/MobileNav'
import { navLinks } from '../../assets/data/static/navLinks'
import { NavLinksType } from '../../assets/data/types'
import NavLink from '../links/NavLink'
import { Link } from 'react-router-dom'
import { ReactComponent as MainLogo } from '../../assets/images/icons/Mesh_White.svg'
import '../../styles/Navbar.css'
import HomeSearch from '../searches/HomeSearch'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { motion } from 'framer-motion'
const Navbar = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)
    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const toggle = (): void => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const scrollFunction = () => {
        let elem: HTMLElement | null = document.getElementById('homeNav')
        if (elem) {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                elem.style.backgroundColor = '#DF7E7E'
                setScrolled(true)
            } else {
                elem.style.backgroundColor = 'transparent'
                setScrolled(false)
            }
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            scrollFunction()
        }
    }, [])

    const dropDownOpen = Boolean(anchorEl)
    const id = dropDownOpen ? 'nav-dropdown' : undefined
    return (
        <nav
            className="fixed top-0 w-full z-50 px-20 py-6 transition-colors duration-500 ease-in-out md:px-8 sm:px-8 xs:px-4 xs:py-4"
            id="homeNav"
        >
            <div className="relative flex items-center justify-between">
                <HomeSearch scrolled={scrolled} />
                <MobileNav
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={toggle}
                    onOpen={toggle}
                />
                <div className="hidden sm:block">
                    <MenuIcon
                        className="text-white hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-pointer"
                        sx={{
                            fontSize: {
                                sm: '2rem',
                                xs: '1.5rem',
                            },
                        }}
                        onClick={toggle}
                    />
                </div>
                <div className="w-1/4 flex items-center sm:hidden">
                    <MainLogo />
                    <span className="ml-1 text-2xl white font-semibold md:text-lg">
                        <Link to="/">Flowerie</Link>
                    </span>
                </div>
                {!scrolled && (
                    <div className="w-1/2 flex items-center justify-center sm:hidden md:w-1/4 sm:w-1/2 md:justify-evenly">
                        {navLinks.map(
                            (item: NavLinksType, index: React.Key) => (
                                <NavLink
                                    href={item.href}
                                    label={item.label}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                )}
                <div className="w-1/4 flex items-center justify-end md:justify-start sm:justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="block font-medium text-xl white cursor-pointer mr-4 md:text-sm md:mr-0 sm:hidden w-full "
                    >
                        <Link to="host">Become a vendor</Link>
                    </motion.div>
                    <div className="p-1 bg-white rounded-full flex items-center justify-center">
                        <button
                            className="pr-1"
                            aria-describedby={id}
                            onClick={handleDropDownOpen}
                        >
                            <MenuIcon />
                        </button>
                        <NavDropDown
                            id={id}
                            open={dropDownOpen}
                            anchorEl={anchorEl}
                            handleClose={handleDropDownClose}
                        />
                        <AccountCircleIcon
                            sx={{
                                color: '#C4C4C4',
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
