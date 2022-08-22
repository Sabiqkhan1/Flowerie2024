import React from 'react'
import TableCell from '@mui/material/TableCell'
import StatusButton from '../buttons/StatusButton'
import GuestStatusDropdown from '../popovers/GuestStatusDropdown'

interface GuestStatusCellProps {
    status: number
    groupId: React.Key
    guestId: React.Key
    field: string
}

const GuestStatusCell: React.FC<GuestStatusCellProps> = ({
    status,
    groupId,
    guestId,
    field,
}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    )
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined
    return (
        <TableCell align="left" sx={{ p: 1, fontFamily: 'medium' }}>
            <StatusButton id={id} onClick={handleClick} status={status} />
            <GuestStatusDropdown
                id={id}
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                groupId={groupId}
                guestId={guestId}
                field={field}
            />
        </TableCell>
    )
}

export default React.memo(GuestStatusCell)
