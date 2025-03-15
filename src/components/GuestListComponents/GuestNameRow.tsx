import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import GuestStatusCell from './GuestStatusCell'
import GuestActionDropdown from '../popovers/GuestActionDropdown'
import { useGuest } from '../../contexts/guest.context'

interface GuestNameRowProps {
    guest: string
    receptionStatus: number
    ceremonyStatus: number
    weddingBreakfastStatus: number
    groupId: React.Key
    guestId: React.Key
}

const GuestNameRow: React.FC<GuestNameRowProps> = ({
    guest,
    receptionStatus,
    ceremonyStatus,
    weddingBreakfastStatus,
    groupId,
    guestId,
}) => {
    const { handleDeleteGuest } = useGuest()
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
        handleDeleteGuest(Number(groupId), guestId)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined
    return (
        <TableRow
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{ p: 1, fontFamily: 'medium' }}
            >
                <div className="flex items-center">
                    <Checkbox
                        sx={{
                            p: 0,
                            color: 'rgba(217, 217, 217, 1)',
                            '&.Mui-checked': {
                                color: '#DF7E7E',
                            },
                        }}
                    />
                    <AccountCircleOutlinedIcon
                        sx={{
                            color: 'rgba(46, 46, 72, 1)',
                            mx: 1,
                        }}
                    />
                    <p>{guest}</p>
                </div>
            </TableCell>
            <GuestStatusCell
                status={receptionStatus}
                groupId={groupId}
                guestId={guestId}
                field="receptionStatus"
            />
            <GuestStatusCell
                status={ceremonyStatus}
                groupId={groupId}
                guestId={guestId}
                field="ceremonyStatus"
            />
            <GuestStatusCell
                status={weddingBreakfastStatus}
                groupId={groupId}
                guestId={guestId}
                field="weddingBreakfastStatus"
            />
            <TableCell align="left" sx={{ p: 1 }}>
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
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                />
            </TableCell>
        </TableRow>
    )
}

export default React.memo(GuestNameRow)
