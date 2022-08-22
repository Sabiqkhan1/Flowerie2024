import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { moodBoardLinks } from '../../assets/data/static/moodBoardLinks'
import ToolDrawer from './ToolDrawer'
function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div
            style={{
                backgroundColor: match ? '#252627' : 'transparent',
                borderRadius: '12px 0px 0px 12px',
            }}
        >
            <Link
                to={to}
                {...props}
                className="flex flex-col items-center py-3 px-1"
            >
                {children}
            </Link>
        </div>
    )
}

const MoodBoardNav = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(true)

    const toggle = (): void => {
        setDrawerOpen(!drawerOpen)
    }
    return (
        <div className="flex">
            <nav className="h-[calc(100vh-64px)] w-max bg-[#18191B] pt-4 overflow-auto no-scroll">
                {moodBoardLinks.map((mood, index) => (
                    <CustomLink to={mood.to} key={index}>
                        {mood.icon}
                        <p className="font-semibold text-[8px] text-white">
                            {mood.label}
                        </p>
                    </CustomLink>
                ))}
            </nav>
            <ToolDrawer open={drawerOpen} toggle={toggle} />
        </div>
    )
}

export default MoodBoardNav
