import React from 'react'
import { Tooltip, IconButton, Divider } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
const MoodBoardHeader: React.FC = () => {
    return (
        <header className="bg-white w-full p-4 border border-[#333333] shadow-lg flex items-center justify-between rounded-md">
            <p className="font-roboto-regular text-black">
                24th Aug - 26th Aug
            </p>
            <div className="flex items-center">
                <Tooltip title="Share">
                    <IconButton size="small">
                        <IosShareIcon sx={{ color: 'black' }} />
                    </IconButton>
                </Tooltip>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        borderColor: '#000',
                        mx: '2px',
                    }}
                />
                <Tooltip title="Delete Page">
                    <IconButton size="small">
                        <DeleteForeverIcon sx={{ color: 'black' }} />
                    </IconButton>
                </Tooltip>
            </div>
        </header>
    )
}

export default MoodBoardHeader
