import { MenuItem, Select, FormControl } from '@mui/material'
import { SelectProps } from '@mui/material/Select'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const CuisineSelect: React.FC<SelectProps<string>> = ({
    value,
    onChange,
}): JSX.Element => {
    return (
        <FormControl fullWidth variant="standard">
            <Select
                disableUnderline
                IconComponent={KeyboardArrowDownIcon}
                value={value}
                onChange={onChange}
                displayEmpty
                inputProps={{
                    'aria-label': 'Without label',
                    sx: {
                        textAlign: 'left',
                        px: 1,
                        py: 2,
                    },
                }}
                sx={{
                    fontSize: 16,
                    fontFamily: 'inter-regular',
                    color: 'black',
                    border: '1px solid #949494',
                    borderRadius: 2,
                    boxShadow: '0px 0px 5px 0px #94949460',
                }}
            >
                <MenuItem value="">Select one</MenuItem>
                <MenuItem value="chinese">Chinese</MenuItem>
                <MenuItem value="american">American</MenuItem>
                <MenuItem value="japanese">Japanese</MenuItem>
                <MenuItem value="italian">Italian</MenuItem>
                <MenuItem value="indian">Indian</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CuisineSelect
