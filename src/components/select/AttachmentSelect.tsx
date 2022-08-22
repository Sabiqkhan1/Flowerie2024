import { MenuItem, Select, FormControl } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import '../../styles/LanguageSelect.css'

const AttachmentSelect: React.FC = (): JSX.Element => {
    const [attachment, setAttachment] = useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        setAttachment(event.target.value)
    }
    return (
        <FormControl
            variant="standard"
            sx={{
                mx: 1,
                minWidth: 80,
            }}
        >
            <Select
                disableUnderline
                IconComponent={KeyboardArrowDownIcon}
                value={attachment}
                onChange={handleChange}
                displayEmpty
                inputProps={{
                    'aria-label': 'Without label',
                    style: {
                        paddingBlock: 0,
                    },
                }}
                sx={{
                    fontSize: 16,
                    fontFamily: 'segoe-regular',
                    color: 'black',
                }}
            >
                <MenuItem value="">Attach</MenuItem>
                <MenuItem value="file">File</MenuItem>
            </Select>
        </FormControl>
    )
}

export default AttachmentSelect
