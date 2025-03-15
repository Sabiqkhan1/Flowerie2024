import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

import { useRender } from '../../hooks/useRender'

interface StatusButtonProps extends ButtonProps {
    status: number
}

const StatusButton: React.FC<StatusButtonProps> = ({ id, onClick, status }) => {
    const { renderStatus } = useRender()
    const { label, icon } = renderStatus(status) || { label: '', icon: null }
    return (
        <Button
            aria-describedby={id}
            onClick={onClick}
            variant="text"
            startIcon={icon}
            endIcon={
                <KeyboardArrowDownRoundedIcon
                    sx={{
                        color: 'rgba(46, 46, 72, 1)',
                    }}
                />
            }
            sx={{
                p: 0,
                fontFamily: 'regular',
                textTransform: 'none',
                color: 'black',
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
        >
            {label}
        </Button>
    )
}

export default React.memo(StatusButton)
