import React from 'react'
import { styled } from '@mui/material'
export interface ToolItemCardProps {
    img: string
    name: string
    price: string
}

const Img = styled('img')({
    width: 130,
    height: 130,
    display: 'block',
})

const ToolItemCard: React.FC<ToolItemCardProps> = ({
    img,
    name,
    price,
}): JSX.Element => {
    return (
        <div className="rounded-t-[10px] overflow-hidden border border-black shadow-md m-2">
            <Img src={img} />
            <div className="bg-[#F0E6E6] p-2">
                <p className="font-semibold text-black text-sm">{name}</p>
                <p className="font-semibold text-black text-sm">
                    {`£${price}`}
                </p>
            </div>
        </div>
    )
}

export default ToolItemCard
