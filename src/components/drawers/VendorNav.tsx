/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import VendorLogo from '../common/VendorLogo'
import { Box, Collapse, Divider, ListItemButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useNavigate } from 'react-router-dom'
import {
    vendorLinks,
    vendorSecondaryLinks,
} from '../../assets/data/static/vendorLinks'
import SidebarButton from '../buttons/SidebarButton'
interface VendorNavProps {
    anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined
    open: boolean
    onClose: () => void
    onOpen: () => void
}

const VendorNav: React.FC<VendorNavProps> = ({
    anchor,
    onClose,
    onOpen,
    open,
}): JSX.Element => {
    const [paymentOpen, setPaymentOpen] = useState<boolean>(true)
    const [commerceOpen, setCommerceOpen] = useState<boolean>(true)

    const navigate = useNavigate()
    const handleExpansion = (type: string) => {
        return () => {
            if (type === 'payment') {
                setPaymentOpen(!paymentOpen)
            }
            if (type === 'commerce') {
                setCommerceOpen(!commerceOpen)
            }
        }
    }
    return (
        <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            sx={{
                display: {
                    lg: 'none',
                    md: 'none',
                    sm: 'block',
                    xs: 'block',
                },
            }}
        >
            <Box
                sx={{ width: 256, pt: 1 }}
                role="presentation"
                className="bg-sidebarBackground h-full thin-scroll"
            >
                <VendorLogo />
                <List
                    sx={{ width: '100%', maxWidth: 256 }}
                    component="nav"
                    aria-labelledby="nested-vendor-list"
                >
                    <ListItemButton
                        onClick={handleExpansion('payment')}
                        sx={{ pl: '32px' }}
                    >
                        <ListItemText
                            primary="Payments"
                            primaryTypographyProps={{
                                fontFamily: 'bold',
                                color: '#828282',
                            }}
                        />
                        {paymentOpen ? (
                            <ArrowDropUpIcon sx={{ color: '#BDBDBD' }} />
                        ) : (
                            <ArrowDropDownIcon sx={{ color: '#BDBDBD' }} />
                        )}
                    </ListItemButton>
                    <Collapse in={paymentOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {vendorLinks.map((item, index) => (
                                <ListItemButton
                                    sx={{ pl: '34px' }}
                                    key={index}
                                    onClick={() => {
                                        navigate(item.to)
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontFamily: 'medium',
                                            fontSize: 14,
                                            color: '#828282',
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                    <Divider
                        sx={{
                            width: '90%',
                            mx: 'auto',
                            my: 2,
                            borderColor: '#DDE7F1',
                        }}
                    />
                    <ListItemButton
                        onClick={handleExpansion('commerce')}
                        sx={{ pl: '32px' }}
                    >
                        <ListItemText
                            primary="Commerce"
                            primaryTypographyProps={{
                                fontFamily: 'bold',
                                color: '#828282',
                            }}
                        />
                        {commerceOpen ? (
                            <ArrowDropUpIcon sx={{ color: '#BDBDBD' }} />
                        ) : (
                            <ArrowDropDownIcon sx={{ color: '#BDBDBD' }} />
                        )}
                    </ListItemButton>
                    <Divider
                        sx={{
                            width: '90%',
                            mx: 'auto',
                            my: 2,
                            borderColor: '#DDE7F1',
                        }}
                    />
                    {vendorSecondaryLinks.map((item, index) => (
                        <ListItemButton
                            sx={{ pl: '34px' }}
                            key={index}
                            onClick={() => navigate(item.to)}
                        >
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontFamily: 'medium',
                                    fontSize: 14,
                                    color: '#828282',
                                    ml: 1,
                                }}
                            />
                        </ListItemButton>
                    ))}
                    <div className="text-center">
                        <SidebarButton background="green">
                            Create new post
                        </SidebarButton>
                        <SidebarButton background="maroon">
                            Log out
                        </SidebarButton>
                    </div>
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default VendorNav
