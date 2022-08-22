/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logo from '../../assets/images/Mesh_Red.png'
import SearchInput from '../inputs/SearchInput'
import { Link } from 'react-router-dom'
interface MobileNavProps {
    anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined
    open: boolean
    onClose: () => void
    onOpen: () => void
}

const SearchMobileNav: React.FC<MobileNavProps> = ({
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
                sx={{ width: { md: 450, sm: 450, xs: 300 } }}
                role="presentation"
            >
                <List>
                    <ListItem
                        button
                        sx={{ paddingBlock: 0, justifyContent: 'center' }}
                    >
                        <ListItemIcon>
                            <img src={Logo} alt="logo" />
                        </ListItemIcon>
                        <a href="#">
                            <ListItemText
                                primary={
                                    <span className="ml-1 text-2xl text-light-maroon font-semibold">
                                        <Link to="/">Flowerie</Link>
                                    </span>
                                }
                            />
                        </a>
                    </ListItem>
                    <ListItem sx={{ paddingBlock: 2 }}>
                        <SearchInput placeholder="Want to discover your dream venue?" />
                    </ListItem>
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default SearchMobileNav
