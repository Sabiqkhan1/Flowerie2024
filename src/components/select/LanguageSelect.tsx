import { MenuItem, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import React, { useState } from 'react'
import '../../styles/LanguageSelect.css'

const LanguageSelect: React.FC = (): JSX.Element => {
    const [language, setLanguage] = useState<string>('English (US)')

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value)
    }
    return (
        <div className="language-select text-right xs:text-center">
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{
                    'aria-label': 'Without label',
                    style: {
                        paddingBlock: 0,
                    },
                }}
                sx={{
                    fontSize: 19,
                    fontFamily: 'roboto-regular',
                    color: '#8F9192',
                }}
            >
                <MenuItem value="English (US)">English (US)</MenuItem>
            </Select>
        </div>
    )
}

export default LanguageSelect
