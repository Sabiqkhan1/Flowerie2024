import React from 'react'
import { Collapse } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { Outlet } from 'react-router-dom'

export interface ToolDrawerProps {
    open: boolean
    toggle(): void
}

const ToolDrawer: React.FC<ToolDrawerProps> = ({
    open,
    toggle,
}): JSX.Element => {
    return (
        <div className="relative">
            <Collapse
                in={open}
                orientation="horizontal"
                sx={{ height: '100%', position: 'relative' }}
            >
                <div className="w-[380px] h-[calc(100vh-64px)] overflow-auto no-scroll bg-[#252627] p-4">
                    <Outlet />
                </div>
            </Collapse>
            <button
                onClick={toggle}
                className="bg-[#252627] px-2 py-6 text-white absolute top-[50%] right-[-44px] rounded-r-2xl"
            >
                {open ? (
                    <ArrowCircleLeftIcon
                        sx={{ color: '#fff', fontSize: '1.8rem' }}
                    />
                ) : (
                    <ArrowCircleRightIcon
                        sx={{ color: '#fff', fontSize: '1.8rem' }}
                    />
                )}
            </button>
        </div>
    )
}

export default ToolDrawer
