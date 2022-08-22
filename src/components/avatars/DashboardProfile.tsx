import React from 'react'
import { Card, CardMedia } from '@mui/material'
import profile from '../../assets/images/dashboard_profile.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const DashboardProfile: React.FC = (): JSX.Element => {
    return (
        <>
            <Card
                sx={{
                    display: 'flex',
                    width: 'max-content',
                    bgcolor: '#FCFCFC',
                    borderRadius: '10px',
                    boxShadow: '0px 1px 3px 0px rgba(0,0, 0, 0.12)',
                    cursor: 'pointer',
                    ml: {
                        lg: 0,
                        md: 4,
                        sm: 3,
                        xs: 2,
                    },
                }}
            >
                <CardMedia
                    component="img"
                    sx={{ width: { sm: 48, xs: 36 } }}
                    image={profile}
                    alt="Profile"
                />
                <div className="flex items-center px-4 sm:hidden">
                    <div className="mr-5">
                        <p className="font-semibold text-xs text-[#828282]">
                            Anddy’s Makeover
                        </p>
                        <p className="font-semibold text-xs text-[#BDBDBD]">
                            ID: 1234567
                        </p>
                    </div>
                    <KeyboardArrowDownIcon
                        sx={{ color: '#828282', fontSize: 20 }}
                    />
                </div>
            </Card>
        </>
    )
}

export default DashboardProfile
