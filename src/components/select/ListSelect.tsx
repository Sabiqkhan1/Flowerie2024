import React from 'react'
import { Select, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { SelectChangeEvent } from '@mui/material/Select'

export interface ListSelectProps {
    handleChange(event: SelectChangeEvent): void
    value: string | undefined
}

const ListSelect: React.FC<ListSelectProps> = ({
    handleChange,
    value,
}): JSX.Element => {
    return (
        <div>
            <Select
                onChange={handleChange}
                value={value}
                renderValue={(value) => {
                    if (value) {
                        return (
                            <span className="font-inter-regular text-black">
                                {value}
                            </span>
                        )
                    }
                    return (
                        <span className="font-inter-regular text-black">
                            Select one
                        </span>
                    )
                }}
                defaultValue=""
                displayEmpty
                inputProps={{
                    'aria-label': 'Without label',
                    style: {
                        fontFamily: 'inter-regular',
                    },
                }}
                fullWidth
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0px 2px 5px 0 rgba(0, 0, 0, 0.6)',
                }}
                IconComponent={KeyboardArrowDownIcon}
            >
                <MenuItem value="">Select one</MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
            </Select>
        </div>
    )
}

export default ListSelect
