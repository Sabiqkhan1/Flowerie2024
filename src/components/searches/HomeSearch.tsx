import React, { useState } from 'react'
import { Collapse } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker, Range } from 'react-date-range'
import './style.css'
export interface HomeSearchProps
    extends React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {
    scrolled: boolean
}

const HomeSearch: React.FC<HomeSearchProps> = ({ scrolled }): JSX.Element => {
    const [searchModal, setSearchModal] = useState<boolean>(false)
    const [date, setDate] = useState<Array<Range>>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: '#AEE2D6',
        },
    ])
    const toggle = (): void => {
        if (searchModal) {
            setSearchModal(false)
        }
        setSearchModal(true)
    }

    const handleFormClose = (e: any) => {
        e.preventDefault()
        setSearchModal(false)
    }

    return (
        <form className={scrolled ? 'search-form scrolled ' : 'search-form'}>
            <div
                className={
                    scrolled
                        ? 'input-wrapper  '
                        : 'input-wrapper  -mt-12  xs:-mt-10 sm:-mt-24'
                }
            >
                <input
                    type="text"
                    placeholder="Want to discover your dream venue?"
                    className="focus:outline-none "
                    onFocus={toggle}
                />
                <button className="hover:bg-light-maroon-dark transition-colors duration-300">
                    {scrolled ? (
                        <div>
                            <SearchIcon />
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <SearchIcon
                                sx={{
                                    mr: 1,
                                    fontSize: 20,
                                }}
                            />
                            <span>Search</span>
                        </div>
                    )}
                </button>
            </div>
            <Collapse
                in={searchModal}
                orientation="vertical"
                sx={{
                    position: 'absolute',
                    top: scrolled ? 63 : 58,
                    overflow: 'hidden',
                    borderRadius: 1,
                    maxWidth: '96vw',
                }}
            >
                <div className="bg-white shadow-lg  ">
                    <div className="w-full flex">
                        <div className="p-2 w-1/6 min-w-[80px]  text-center ">
                            <div className="my-2">
                                <p className="font-semibold text-black text-xs xs:text-[0.5rem]">
                                    Min Guests
                                </p>
                                <input className="bg-white border border-black/60 rounded-md p-2 w-full focus-visible:outline-none font-roboto-regular text-sm text-black" />
                            </div>
                            <div className="my-2">
                                <p className="font-semibold text-black text-xs xs:text-[0.5rem]">
                                    Max Guests
                                </p>
                                <input className="bg-white border border-black/60 rounded-md p-2 w-full focus-visible:outline-none font-roboto-regular text-sm text-black" />
                            </div>
                        </div>
                        <div className="flex-grow max-w-full ">
                            <DateRangePicker
                                moveRangeOnFirstSelection={false}
                                onChange={(item) => setDate([item.selection])}
                                months={window.screen.width < 600 ? 1 : 2}
                                direction="horizontal"
                                ranges={date}
                                showMonthAndYearPickers={true}
                                showDateDisplay={false}
                                showPreview={true}
                                editableDateInputs={true}
                                className="search-date-range  "
                                weekdayDisplayFormat="E"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/6 min-w-[90px] p-2">
                            <p className="font-regular text-xs text-[#A0A0A0] xs:text-[0.5rem]">
                                Select a single date or date range
                            </p>
                        </div>
                        <div className="flex-grow flex items-center">
                            <div className="w-1/2 px-4">
                                <button
                                    onClick={handleFormClose}
                                    className="w-full py-1 text-center bg-[#C8BABA] rounded-full font-semibold text-white text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                            <div className="w-1/2 px-4">
                                <button className="w-full py-1 text-center bg-light-maroon rounded-full font-semibold text-white text-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </form>
    )
}

export default HomeSearch
