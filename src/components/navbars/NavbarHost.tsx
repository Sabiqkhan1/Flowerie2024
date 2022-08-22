import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/Mesh.png'
import NavDropDown from '../popovers/NavDropDown'
import User from '../../assets/images/User.png'
import Hamburger from '../../assets/images/Hamburger Menu.png'
import { Link } from 'react-router-dom'

const NavbarHost = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const scrollFunction = () => {
        let elem: HTMLElement | null = document.getElementById('homeNav')
        if (elem) {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                elem.style.backgroundColor = '#DF7E7E'
            } else {
                elem.style.backgroundColor = 'transparent'
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
        <div
            className="px-20 md:px-14 sm:px-8 xs:px-4 py-6 xs:py-4  flex items-center justify-between fixed top-0 w-full z-10 transition-colors duration-500 ease-in-out"
            id="homeNav"
        >
            <div className="flex items-center">
                <img src={Logo} alt="logo" />
                <span className="ml-1 md:text-lg text-2xl white font-semibold">
                    <Link to="/">Flowerie</Link>
                </span>
            </div>
            <div className="flex items-center h-3">
                <div className="px-2 bg-white rounded-full flex items-center justify-center">
                    <button
                        className="cursor-pointer"
                        aria-describedby={id}
                        onClick={handleDropDownOpen}
                    >
                        <img src={Hamburger} alt="hamburger" />
                    </button>
                    <NavDropDown
                        id={id}
                        open={dropDownOpen}
                        anchorEl={anchorEl}
                        handleClose={handleDropDownClose}
                    />
                    <img
                        src={User}
                        alt="user"
                        className="pl-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavbarHost
