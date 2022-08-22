import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Mesh_Red.png'
import LogoWhite from '../../assets/images/Mesh.png'
import NavDropDown from '../popovers/NavDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import SearchMobileNav from '../drawers/SearchMobileNav'
import SearchInput from '../inputs/SearchInput'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { NavbarProps } from '../../assets/data/interfaces'
const SearchNavbar: React.FunctionComponent<NavbarProps> = ({
    placeholder,
}): JSX.Element => {
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
        let elem: HTMLElement | null = document.getElementById('lightNav')
        let logo: HTMLElement | null =
            document.getElementById('contrast-logo-text')
        if (elem && logo) {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                setScrolled(true)
                elem.style.backgroundColor = '#DF7E7E'
                logo.style.color = '#fff'
            } else {
                setScrolled(false)
                elem.style.backgroundColor = '#fff'
                logo.style.color = '#DF7E7E'
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
            className="bg-white px-20 flex items-center justify-between fixed top-0 w-full z-20 transition-colors duration-500 ease-in-out md:px-14 sm:px-8 xs:px-4 py-4 xs:py-2"
            id="lightNav"
        >
            <SearchMobileNav
                anchor="left"
                open={mobileMenuOpen}
                onClose={toggle}
                onOpen={toggle}
            />
            <div className="hidden sm:block">
                <MenuIcon
                    className="text-light-maroon hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-pointer"
                    sx={{ fontSize: '2rem' }}
                    onClick={toggle}
                />
            </div>
            <div className="flex sm:hidden items-center">
                <img
                    id="logo-image"
                    src={scrolled ? LogoWhite : Logo}
                    alt="logo"
                    className="w-[44px] h-[44px]"
                />
                <span
                    className="ml-1 text-2xl font-semibold md:text-lg"
                    id="contrast-logo-text"
                >
                    <Link to="/">Flowerie</Link>
                </span>
            </div>
            <div className="w-2/4 md:w-3/5 sm:hidden">
                <SearchInput placeholder={placeholder} />
            </div>
            <div className="p-1 bg-[#F4F3F3] rounded-full flex items-center justify-center">
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
                <AccountCircleIcon sx={{ color: '#C4C4C4', fontSize: 28 }} />
            </div>
        </nav>
    )
}

export default SearchNavbar
