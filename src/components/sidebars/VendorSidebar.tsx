import {
    List,
    ListItemButton,
    Collapse,
    ListItemText,
    ListItemIcon,
    Divider,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import React, { useState } from 'react'
import VendorLogo from '../common/VendorLogo'
import {
    vendorLinks,
    vendorSecondaryLinks,
} from '../../assets/data/static/vendorLinks'
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom'
import SidebarButton from '../buttons/SidebarButton'

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div style={{ backgroundColor: match ? '#C4C4C450' : 'transparent' }}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}

const VendorSidebar = () => {
    const [paymentOpen, setPaymentOpen] = useState<boolean>(true)
    const [commerceOpen, setCommerceOpen] = useState<boolean>(true)

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
        <div className="w-64 min-w-[256px] h-full overflow-y-auto thin-scroll bg-sidebarBackground text-center py-3 sm:hidden">
            <VendorLogo />
            <List
                sx={{ width: '100%', maxWidth: 256 }}
                component="nav"
                aria-labelledby="nested-vendor-list"
            >
                <ListItemButton
                    onClick={handleExpansion('payment')}
                    sx={{ pl: '32px', py: '0' }}
                >
                    <ListItemText
                        primary="Payments"
                        primaryTypographyProps={{
                            fontFamily: 'bold',
                            color: '#828282',
                            fontSize: 14,
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
                            <CustomLink to={item.to}>
                                <ListItemButton
                                    sx={{ pl: '34px', py: '4px' }}
                                    key={index}
                                >
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontFamily: 'medium',
                                            fontSize: 12,
                                            color: '#828282',
                                            ml: 1,
                                        }}
                                    />
                                </ListItemButton>
                            </CustomLink>
                        ))}
                    </List>
                </Collapse>
                <Divider
                    sx={{
                        width: '90%',
                        mx: 'auto',
                        my: 1,
                        borderColor: '#DDE7F1',
                    }}
                />
                <ListItemButton
                    onClick={handleExpansion('commerce')}
                    sx={{ pl: '32px', py: 0 }}
                >
                    <ListItemText
                        primary="Commerce"
                        primaryTypographyProps={{
                            fontFamily: 'bold',
                            color: '#828282',
                            fontSize: 14,
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
                        my: 1,
                        borderColor: '#DDE7F1',
                    }}
                />
                {vendorSecondaryLinks.map((item, index) => (
                    <CustomLink to={item.to}>
                        <ListItemButton
                            sx={{ pl: '34px', py: '4px' }}
                            key={index}
                        >
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontFamily: 'medium',
                                    fontSize: 12,
                                    color: '#828282',
                                    ml: 1,
                                }}
                            />
                        </ListItemButton>
                    </CustomLink>
                ))}
                <Link to="/post-form">
                    <SidebarButton background="green">
                        Create new post
                    </SidebarButton>
                </Link>
                <SidebarButton background="maroon">Log out</SidebarButton>
            </List>
        </div>
    )
}

export default VendorSidebar
