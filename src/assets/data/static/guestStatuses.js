import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'

export const guestStatuses = [
    {
        label: 'Confirmed',
        icon: (
            <CheckCircleOutlineRoundedIcon
                sx={{
                    color: '#6EBD56',
                }}
            />
        ),
    },
    {
        label: 'Pending',
        icon: (
            <AccessTimeRoundedIcon
                sx={{
                    color: '#FFC700',
                }}
            />
        ),
    },
    {
        label: 'Declined',
        icon: (
            <HighlightOffRoundedIcon
                sx={{
                    color: '#F24E1E',
                }}
            />
        ),
    },
]
