import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
export const useRender = () => {
    const renderStatus = (status: number) => {
        if (status === 0) {
            return {
                label: 'Confirmed',
                icon: (
                    <CheckCircleOutlineRoundedIcon
                        sx={{
                            color: '#6EBD56',
                        }}
                    />
                ),
            }
        }
        if (status === 1) {
            return {
                label: 'Pending',
                icon: (
                    <AccessTimeRoundedIcon
                        sx={{
                            color: '#FFC700',
                        }}
                    />
                ),
            }
        }
        if (status === 2) {
            return {
                label: 'Declined',
                icon: (
                    <HighlightOffRoundedIcon
                        sx={{
                            color: '#F24E1E',
                        }}
                    />
                ),
            }
        }
    }

    return { renderStatus }
}
