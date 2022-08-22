import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export interface MessageCardProps {
    date: string
    name: string
    message: string
}

const MessageCard: React.FC<MessageCardProps> = ({
    date,
    name,
    message,
}): JSX.Element => {
    return (
        <Link to="/chat">
            <div className="w-full h-[126px] bg-white rounded-20 p-4 flex flex-col justify-between my-3 hover:bg-[#E7E7E160] transition-colors duration-300 cursor-pointer hover:shadow-md">
                <div className="flex justify-between items-center">
                    <Avatar
                        sx={{
                            bgcolor: `#${Math.floor(
                                Math.random() * 16777215
                            ).toString(16)}`,
                            borderRadius: '10px',
                            fontSize: '12px',
                            fontFamily: 'semibold',
                        }}
                        variant="rounded"
                    >
                        {name[0]}
                    </Avatar>
                    <span className="font-semibold text-[8px] text-[#BDBDBD]">
                        {date}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="max-w-[150px]">
                        <p className="font-semibold text-xs text-[#333333] truncate">
                            {name}
                        </p>
                        <p className="font-semibold text-xs text-[#BDBDBD] truncate mt-1">
                            {message}
                        </p>
                    </div>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </div>
            </div>
        </Link>
    )
}

export default MessageCard
