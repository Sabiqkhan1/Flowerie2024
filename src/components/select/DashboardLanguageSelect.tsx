import React, { useState } from 'react'
import '../../styles/DashboardLanguageSelect.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LanguageDropDown from '../../components/popovers/LanguageDropDown'
const DashboardLanguageSelect: React.FC = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const dropDownOpen = Boolean(anchorEl)
    const id = dropDownOpen ? 'nav-dropdown' : undefined
    return (
        <>
            <button
                aria-describedby={id}
                onClick={handleDropDownOpen}
                className="dashboard-language-select text-right xs:text-center border rounded-full py-2 px-3 flex items-center justify-center cursor-pointer"
            >
                <span className="font-regular text-[#828282] text-sm">
                    English
                </span>
                <KeyboardArrowDownIcon sx={{ color: '#828282', ml: 2 }} />
            </button>
            <LanguageDropDown
                id={id}
                open={dropDownOpen}
                anchorEl={anchorEl}
                handleClose={handleDropDownClose}
            />
        </>
    )
}

export default DashboardLanguageSelect
