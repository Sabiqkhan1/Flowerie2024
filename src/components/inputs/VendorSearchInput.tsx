import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
const VendorSearchInput: React.FC = (): JSX.Element => {
    return (
        <div className="flex items-center rounded-full bg-searchBackground min-w-[150px] max-w-[300px] py-3  px-4 sm:ml-4">
            <SearchIcon sx={{ fontSize: 16, color: '#A6AAB5' }} />
            <input
                className="w-full bg-transparent font-regular text-black text-sm placeholder:text-[#BBBBBB] focus-visible:outline-none ml-2"
                placeholder="Search"
            />
        </div>
    )
}

export default VendorSearchInput
