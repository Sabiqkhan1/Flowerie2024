import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
const ChatSearchInput: React.FC = (): JSX.Element => {
    return (
        <div className="flex items-center rounded-md bg-white w-full p-2 sm:ml-4">
            <input
                className="w-full bg-transparent font-segoe-regular text-black text-sm placeholder:text-[#BBBBBB] focus-visible:outline-none ml-2"
                placeholder="Search"
            />
            <SearchIcon sx={{ fontSize: 16, color: '#A6AAB5' }} />
        </div>
    )
}

export default ChatSearchInput
