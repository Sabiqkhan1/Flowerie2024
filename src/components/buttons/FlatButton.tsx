import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface FlatButtonProps extends ButtonProps {
    children: React.ReactNode
    background?: 'green' | 'maroon'
}

const FlatButton: React.FC<FlatButtonProps> = ({
    children,
    background = 'green',
    sx,
}): JSX.Element => {
    return (
        <Button
            sx={{
                ...sx,
                bgcolor: background === 'green' ? '#A6D997' : '#D98775',
                color: 'white',
                fontFamily: 'medium',
                fontSize: 13,
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                textTransform: 'none',
                px: 0,
                width: 175,
                '&:hover': {
                    bgcolor: background === 'green' ? '#A6D997' : '#D98775',
                    transform: 'scale(1.05)',
                },
            }}
        >
            {children}
        </Button>
    )
}

export default FlatButton
