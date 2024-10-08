import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import GuestActionDropdown from '../popovers/GuestActionDropdown'
import { useGuest } from '../../contexts/guest.context'

interface GuestGropRowProps {
    group: string
    groupId: number
}

const GuestGroupRow: React.FC<GuestGropRowProps> = ({ group, groupId }) => {
    const { handleDeleteGroup } = useGuest()
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    )
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDelete = () => {
        handleDeleteGroup(groupId)
    }
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const cellstyle = {
        fontFamily: 'medium',
        color: 'black',
        fontSize: { lg: 16 },
        p: 1,
    }
    return (
        <TableRow sx={{ padding: 0, overflowX: 'scroll' }}>
            <TableCell sx={cellstyle}>{group}</TableCell>
            <TableCell sx={cellstyle}>Reception</TableCell>
            <TableCell sx={cellstyle}>Ceremony</TableCell>
            <TableCell sx={cellstyle}>Wedding Breakfast</TableCell>
            <TableCell sx={{ p: 1 }}>
                <IconButton
                    size="small"
                    aria-describedby={id}
                    onClick={handleClick}
                >
                    <MoreHorizIcon
                        sx={{
                            color: 'black',
                        }}
                    />
                </IconButton>
                <GuestActionDropdown
                    id={id}
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                />
            </TableCell>
        </TableRow>
    )
}

export default GuestGroupRow
