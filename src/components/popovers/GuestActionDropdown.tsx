import React from 'react'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
interface GuestActionDropdownProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose(): void
    handleDelete(): void
}

const GuestActionDropdown: React.FC<GuestActionDropdownProps> = ({
    id,
    open,
    anchorEl,
    handleClose,
    handleDelete,
}) => {
    const deleteRow = () => {
        handleDelete()
        handleClose()
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
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
                <li className="border-b border-commonLight last:border-b-0">
                    <Button
                        fullWidth
                        variant="text"
                        onClick={handleClose}
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
                        Rename
                    </Button>
                </li>
                <li className="border-b border-commonLight last:border-b-0">
                    <Button
                        fullWidth
                        variant="text"
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
                        onClick={deleteRow}
                    >
                        Delete
                    </Button>
                </li>
            </ul>
        </Popover>
    )
}

export default GuestActionDropdown
