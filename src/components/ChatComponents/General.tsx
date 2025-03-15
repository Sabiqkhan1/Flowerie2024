import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControl,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined'
import { SelectChangeEvent } from '@mui/material/Select'
const General: React.FC = (): JSX.Element => {
    const [value, setValue] = React.useState('allowed')

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value)
    }
    return (
        <div className="h-[calc(100vh-36px)] p-4 overflow-auto thin-scroll">
            <div>
                <h2 className="font-medium text-2xl text-black">
                    General Settings
                </h2>
                <Accordion
                    sx={{
                        my: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        border: '1px solid rgb(208 208 208 / 69%);',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex items-center">
                            <PowerSettingsNewOutlinedIcon
                                sx={{ fontSize: 20 }}
                            />
                            <div className="ml-2">
                                <p className="font-segoe-regular text-black text-sm">
                                    Personal data
                                </p>
                                <p className="font-segoe-regular text-[rgba(0,0,0,66.63%)] text-xs">
                                    Set your personal data and choose what other
                                    people can see
                                </p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Personal data</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        my: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        border: '1px solid rgb(208 208 208 / 69%);',
                        '&::before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex items-center">
                            <PowerSettingsNewOutlinedIcon
                                sx={{ fontSize: 20 }}
                            />
                            <div className="ml-2">
                                <p className="font-segoe-regular text-black text-sm">
                                    Notifications
                                </p>
                                <p className="font-segoe-regular text-[rgba(0,0,0,66.63%)] text-xs">
                                    Adjust what notifications can you recieve
                                </p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>
                        <ul>
                            <li className="bg-[rgba(246,246,246,0.5)] px-8 py-2 flex items-center justify-between font-segoe-regular text-black text-sm border-b">
                                <p>Recieve notification from groups</p>
                                <FormControl
                                    sx={{ minWidth: 120, bgcolor: 'white' }}
                                >
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                        sx={{
                                            '& > div': {
                                                padding: '8px 14.5px',
                                            },
                                            fontSize: 14,
                                            fontFamily: 'segoe-regular',
                                        }}
                                    >
                                        <MenuItem value={'allowed'}>
                                            Allowed
                                        </MenuItem>
                                        <MenuItem value={'blocked'}>
                                            Blocked
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li className="bg-[rgba(246,246,246,0.5)] px-8 py-2 flex items-center justify-between font-segoe-regular text-black text-sm border-b">
                                <p>Recieve notifications from contacts</p>
                                <FormControl
                                    sx={{ minWidth: 120, bgcolor: 'white' }}
                                >
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                        sx={{
                                            '& > div': {
                                                padding: '8px 14.5px',
                                            },
                                            fontSize: 14,
                                            fontFamily: 'segoe-regular',
                                        }}
                                    >
                                        <MenuItem value={'allowed'}>
                                            Allowed
                                        </MenuItem>
                                        <MenuItem value={'blocked'}>
                                            Blocked
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li className="bg-[rgba(246,246,246,0.5)] px-8 py-2 flex items-center justify-between font-segoe-regular text-black text-sm border-b">
                                <p>Recieve notifications from unknown people</p>
                                <FormControl
                                    sx={{ minWidth: 120, bgcolor: 'white' }}
                                >
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                        sx={{
                                            '& > div': {
                                                padding: '8px 14.5px',
                                            },
                                            fontSize: 14,
                                            fontFamily: 'segoe-regular',
                                        }}
                                    >
                                        <MenuItem value={'allowed'}>
                                            Allowed
                                        </MenuItem>
                                        <MenuItem value={'blocked'}>
                                            Blocked
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li className="bg-[rgba(246,246,246,0.5)] px-8 py-2 flex items-center justify-between font-segoe-regular text-black text-sm">
                                <p>Recieve system notifications</p>
                                <FormControl
                                    sx={{ minWidth: 120, bgcolor: 'white' }}
                                >
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={value}
                                        onChange={handleChange}
                                        sx={{
                                            '& > div': {
                                                padding: '8px 14.5px',
                                            },
                                            fontSize: 14,
                                            fontFamily: 'segoe-regular',
                                        }}
                                    >
                                        <MenuItem value={'allowed'}>
                                            Allowed
                                        </MenuItem>
                                        <MenuItem value={'blocked'}>
                                            Blocked
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        my: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        border: '1px solid rgb(208 208 208 / 69%);',
                        '&::before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex items-center">
                            <PowerSettingsNewOutlinedIcon
                                sx={{ fontSize: 20 }}
                            />
                            <div className="ml-2">
                                <p className="font-segoe-regular text-black text-sm">
                                    Calls and Videocalls
                                </p>
                                <p className="font-segoe-regular text-[rgba(0,0,0,66.63%)] text-xs">
                                    Set your camera and microphone and manage
                                    other settings
                                </p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}></AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        my: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        border: '1px solid rgb(208 208 208 / 69%);',
                        '&::before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex items-center">
                            <PowerSettingsNewOutlinedIcon
                                sx={{ fontSize: 20 }}
                            />
                            <div className="ml-2">
                                <p className="font-segoe-regular text-black text-sm">
                                    Third-party platforms
                                </p>
                                <p className="font-segoe-regular text-[rgba(0,0,0,66.63%)] text-xs">
                                    Manage settings related with third-party
                                    platforms like WhatsApp or Messenger
                                </p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}></AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        my: 1,
                        borderRadius: 1,
                        boxShadow: 'none',
                        border: '1px solid rgb(208 208 208 / 69%);',
                        '&::before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex items-center">
                            <PowerSettingsNewOutlinedIcon
                                sx={{ fontSize: 20 }}
                            />
                            <div className="ml-2">
                                <p className="font-segoe-regular text-black text-sm">
                                    Storage
                                </p>
                                <p className="font-segoe-regular text-[rgba(0,0,0,66.63%)] text-xs">
                                    Set where do you want to save your things
                                    and manage your Litee Chat files
                                </p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}></AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default General
