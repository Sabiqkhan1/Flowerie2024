import React from 'react'
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import type { LinkProps } from 'react-router-dom'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { settings } from '../../assets/data/static/settings'
function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div
            style={{
                backgroundColor: match ? 'rgba(0, 0, 0, 3.73%)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5,
            }}
        >
            {match && (
                <span
                    style={{
                        width: 3,
                        height: 22,
                        background: 'rgba(0, 95, 184, 1)',
                        borderRadius: 2,
                    }}
                />
            )}
            <Link to={to} {...props} className="flex-grow">
                {children}
            </Link>
        </div>
    )
}

const SettingList: React.FC = (): JSX.Element => {
    return (
        <List sx={{ width: '100%' }}>
            {settings.map((setting, index) => (
                <CustomLink to={setting.to} key={index}>
                    <ListItemButton sx={{ py: '4px' }}>
                        <ListItemIcon sx={{ minWidth: 18 }}>
                            {setting.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={setting.label}
                            primaryTypographyProps={{
                                fontFamily: 'segoe-regular',
                                color: 'black',
                                fontSize: 14,
                                ml: 1,
                            }}
                        />
                    </ListItemButton>
                </CustomLink>
            ))}
        </List>
    )
}

export default SettingList
