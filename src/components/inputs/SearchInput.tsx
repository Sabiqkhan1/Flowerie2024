import type { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput: FC<{ placeholder: string }> = ({
    placeholder,
}): JSX.Element => {
    return (
        <form className="w-full rounded-full font-semibold flex items-center justify-between">
            <div className="w-full flex justify-between items-center bg-white rounded-[50px] px-[7px] py-[5px] border border-gray">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full font-light text-lg px-4 focus:outline-none"
                />
                <button className="bg-light-maroon text-white font-semibold text-lg rounded-[50px] px-4 py-3 hover:bg-light-maroon-dark transition-colors duration-300">
                    <div className="flex items-center">
                        <SearchIcon
                            sx={{
                                mr: 1,
                                fontSize: 20,
                            }}
                        />
                        <span>Search</span>
                    </div>
                </button>
            </div>
        </form>
    )
}

export default SearchInput
