import React from 'react'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications'
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#E5A0FF',
        color: '#000',
        fontFamily: 'medium',
    },
}))

const DashboardBadge: React.FC = (): JSX.Element => {
    return (
        <StyledBadge
            badgeContent={4444}
            className="cursor-pointer"
            componentsProps={{
                badge: {
                    style: {
                        fontSize: 8,
                        color: 'black',
                    },
                },
            }}
        >
            <div className="w-10 h-10 xs:w-9 xs:h-9 rounded-lg  bg-searchBackground flex justify-center items-center">
                <NotificationsIcon
                    sx={{ fontSize: { sm: 22, xs: 20 }, color: '#828282' }}
                />
            </div>
        </StyledBadge>
    )
}

export default DashboardBadge
