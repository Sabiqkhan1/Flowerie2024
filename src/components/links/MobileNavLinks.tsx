import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useLocation } from 'react-router-dom'
import type { Location } from 'react-router-dom'
import type { NavLinksProps } from '../../assets/data/interfaces'

const MobileNavLinks = ({ href, label }: NavLinksProps) => {
    const location: Location = useLocation()
    let match: boolean = location.hash === href
    console.log('Match ==> ', match)
    return (
        <ListItem sx={{ padding: 0 }}>
            <ListItemText
                primary={
                    <div
                        className={`
            ${
                match ? 'bg-light-maroon' : 'transparent'
            } font-semibold text-black md:text-lg text-2xl flex flex-col items-center p-4 hover:bg-light-maroon hover:text-white transition-colors duration-300`}
                    >
                        <button className="w-full focus-visible:outline-none">
                            <a href={href}>{label}</a>
                        </button>
                    </div>
                }
            />
        </ListItem>
    )
}

export default MobileNavLinks
