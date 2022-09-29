import { ButtonBase } from '@mui/material'
import React from 'react'

export interface AmenityCardProps {
    id: number
    selected: boolean
    label: string
    icon: React.ReactNode
    handleAmenitySelect(id: number): void
}

const AmenityCard: React.FC<AmenityCardProps> = ({
    id,
    selected,
    label,
    icon,
    handleAmenitySelect,
}): JSX.Element => {
    return (
        <div className="m-5 flex flex-col justify-between max-w-[70px] sm:m-3 xs:m-2 ">
            <p className="text-center font-semibold text-xs  w-full my-1">
                {label}
            </p>
            <ButtonBase onClick={() => handleAmenitySelect(id)}>
                <div
                    className={`w-16 h-16 rounded-2xl ${
                        selected ? 'bg-[#72716E]' : 'bg-[#F0F0F0]'
                    } shadow-md flex justify-center items-center ${
                        selected ? 'hover:bg-[#636363]' : 'hover:bg-[#e7e7e7]'
                    } transition-colors duration-300 cursor-pointer`}
                >
                    <span
                        className={`text-4xl ${
                            selected ? 'text-[#f0f0f0]' : 'text-[#434343]'
                        }`}
                    >
                        {icon}
                    </span>
                </div>
            </ButtonBase>
        </div>
    )
}

export default AmenityCard
