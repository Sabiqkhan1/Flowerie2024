/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Logo from '../../assets/images/icons/Mesh_Red.svg'
import { BsMoon } from 'react-icons/bs'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { navLinks } from '../../assets/data/static/navLinks.js'
import { NavLinksType } from '../../assets/data/types'
import MobileNavLinks from '../links/MobileNavLinks'
interface MobileNavProps {
    anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined
    open: boolean
    onClose: () => void
    onOpen: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({
    anchor,
    onClose,
    onOpen,
    open,
}): JSX.Element => {
    return (
        <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <List>
                    <ListItem
                        button
                        sx={{ paddingBlock: 0, justifyContent: 'center' }}
                    >
                        <span>
                            <img src={Logo} alt="logo" className="w-8 h-8" />
                        </span>
                        <a href="#">
                            <ListItemText
                                primary={
                                    <span className="ml-2 text-2xl text-light-maroon font-semibold">
                                        Flowerie
                                    </span>
                                }
                            />
                        </a>
                    </ListItem>
                    {navLinks.map((item: NavLinksType, index: React.Key) => (
                        <MobileNavLinks
                            href={item.href}
                            label={item.label}
                            key={index}
                        />
                    ))}

                    <Divider />
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemText
                            primary={
                                <div className="font-semibold md:text-lg text-black  text-2xl flex flex-col items-center p-4 hover:bg-light-maroon hover:text-white transition-colors duration-300">
                                    <button className="w-full focus-visible:outline-none ">
                                        Become a vendor
                                    </button>
                                </div>
                            }
                        />
                    </ListItem>
                    <ListItem
                        sx={{
                            justifyContent: 'space-between',
                            paddingBlock: 1,
                            maxWidth: 120,
                            marginInline: 'auto',
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 0 }}>
                            <div className="p-2 bg-light-maroon rounded-lg hover:scale-110 focus-visible:scale-110 transition-transform duration-300 cursor-pointer">
                                <BsMoon className="text-white text-xl" />
                            </div>
                        </ListItemIcon>
                        <ListItemIcon sx={{ minWidth: 0 }}>
                            <div className="p-2 bg-light-maroon rounded-lg hover:scale-110 focus-visible:scale-110 transition-transform duration-300 cursor-pointer">
                                <HiOutlineGlobeAlt className="text-white text-xl" />
                            </div>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default MobileNav
