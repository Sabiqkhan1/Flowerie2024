import { ButtonBase } from '@mui/material'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    background: 'green' | 'maroon'
}

const SidebarButton: React.FC<ButtonProps> = ({
    children,
    background,
}): JSX.Element => {
    return (
        <ButtonBase className="w-3/4" sx={{ my: 2 }}>
            <div
                className={`${
                    background === 'green'
                        ? 'bg-sidebarGreen'
                        : 'bg-sidebarMaroon'
                } py-2 text-black font-medium text-[13px] rounded-[10px] w-full drop-shadow-lg mx-auto hover:scale-105 transition-transform duration-300`}
            >
                {children}
            </div>
        </ButtonBase>
    )
}

export default SidebarButton
