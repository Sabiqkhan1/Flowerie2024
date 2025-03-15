import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ButtonBase, Collapse } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChatSearchInput from '../../components/inputs/ChatSearchInput'
import SettingsIcon from '@mui/icons-material/Settings'
import ChatList from '../lists/ChatList'

const Settings: React.FC = (): JSX.Element => {
    const [toggleDrawer, setToggleDrawer] = useState<boolean>(true)

    const toggle = (): void => {
        setToggleDrawer(!toggleDrawer)
    }
    return (
        <div className="flex flex-grow">
            <div className="flex flex-col">
                <div className="px-4">
                    <ButtonBase onClick={toggle}>
                        <MenuIcon />
                    </ButtonBase>
                </div>
                <Collapse
                    in={toggleDrawer}
                    orientation="horizontal"
                    sx={{ height: '100%' }}
                >
                    <div className="flex flex-col w-[300px] h-full py-2">
                        <div className="px-4">
                            <ChatSearchInput />
                        </div>
                        <div className="flex-grow">
                            <div className="h-[calc(100vh-142px)] overflow-auto thin-scroll px-1">
                                <ChatList />
                            </div>
                        </div>
                        <div className="py-1 px-4">
                            <Link
                                to="settings"
                                className="flex items-center w-max"
                            >
                                <SettingsIcon
                                    sx={{ color: '#212121', fontSize: 18 }}
                                />
                                <p className="font-regular text-sm text-black ml-1">
                                    Settings
                                </p>
                            </Link>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className="h-full bg-[#F9F9F9] flex-grow">
                <Outlet />
            </div>
        </div>
    )
}

export default Settings
