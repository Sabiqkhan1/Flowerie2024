import React from 'react'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import { guestStatuses } from '../../assets/data/static/guestStatuses'
import { useGuest } from '../../contexts/guest.context'
interface GuestStatusDropdownProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose(): void
    groupId: React.Key
    guestId: React.Key
    field: string
}

const GuestStatusDropdown: React.FC<GuestStatusDropdownProps> = ({
    id,
    open,
    anchorEl,
    handleClose,
    groupId,
    guestId,
    field,
}) => {
    const { handleChangeStatus } = useGuest()
    const handleClick =
        ({ value }: { value: number }) =>
        () => {
            handleChangeStatus(groupId, guestId, field, value)
            handleClose()
        }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            PaperProps={{
                sx: {
                    boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.2)',
                    border: '1px solid #f1f1f1',
                    borderRadius: 2,
                },
            }}
        >
            <ul className="bg-white">
                {guestStatuses.map((status: any, index: React.Key) => (
                    <li
                        key={index}
                        className="border-b border-commonLight last:border-b-0 first-of-type:bg-zinc-100"
                    >
                        <Button
                            fullWidth
                            variant="text"
                            startIcon={status.icon}
                            onClick={handleClick({ value: Number(index) })}
                            sx={{
                                py: 1,
                                px: 2,
                                fontFamily: 'regular',
                                textTransform: 'none',
                                color: 'black',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    bgcolor: 'transparent',
                                },
                            }}
                        >
                            {status.label}
                        </Button>
                    </li>
                ))}
            </ul>
        </Popover>
    )
}

export default GuestStatusDropdown
