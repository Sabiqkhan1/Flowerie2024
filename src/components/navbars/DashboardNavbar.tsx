/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import VendorNav from '../drawers/VendorNav'
import VendorSearchInput from '../inputs/VendorSearchInput'
import { styled } from '@mui/material/styles'
import { FormControlLabel, Switch, SwitchProps, alpha } from '@mui/material'
import DashboardLanguageSelect from '../select/DashboardLanguageSelect'
import DashboardBadge from '../badges/DashboardBadge'
import DashboardProfile from '../avatars/DashboardProfile'

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#6FCF97',
            '& + .MuiSwitch-track': {
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#2ECA45' : '#6FCF9742',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}))

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#6FCF97',
        '&:hover': {
            backgroundColor: alpha(
                '#6FCF97',
                theme.palette.action.hoverOpacity
            ),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#6FCF97',
    },
}))

const DashboardNavbar: React.FC = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [live, setLive] = useState<boolean>(true)
    const toggle = (): void => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <>
            <VendorNav
                anchor="left"
                onClose={toggle}
                onOpen={toggle}
                open={mobileMenuOpen}
            />
            <div className="flex items-center justify-between px-4 py-3 xs:py-4">
                <div className="w-full flex items-center">
                    <span className="hidden sm:block">
                        <MenuIcon
                            sx={{ fontSize: 30, cursor: 'pointer' }}
                            onClick={toggle}
                        />
                    </span>
                    <div className="flex-grow max-w-[300px] min-w-[150px] xs:hidden">
                        <VendorSearchInput />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="ml-6 md:hidden">
                        <FormControlLabel
                            value="end"
                            control={
                                <GreenSwitch
                                    checked={live}
                                    onChange={() => setLive(!live)}
                                />
                            }
                            label={live ? 'Live' : 'Offline'}
                            labelPlacement="end"
                            componentsProps={{
                                typography: {
                                    fontFamily: 'regular',
                                    color: '#828282',
                                    fontSize: 14,
                                },
                            }}
                        />
                    </div>
                    <div className="mx-3 md:hidden">
                        <DashboardLanguageSelect />
                    </div>
                    <div className="mx-3 xs:mx-2">
                        <DashboardBadge />
                    </div>
                    <div>
                        <DashboardProfile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar
