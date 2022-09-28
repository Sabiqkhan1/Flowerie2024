import React from 'react'
import OverviewList from '../../../GuestListComponents/OverviewList'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import GuestGroupRow from '../../../GuestListComponents/GuestGroupRow'
import GuestNameRow from '../../../GuestListComponents/GuestNameRow'
import { useGuest } from '../../../../contexts/guest.context'
const Overview = () => {
    const { guests } = useGuest()

    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-4xl">Overview</h1>
            <OverviewList />
            {/* <div className="w-11/12 mx-auto table border border-gray rounded-lg overflow-hidden"> */}
            <div className="w-11/12 border border-gray rounded-lg sm:w-[400px]  xs:w-full self-center overflow-x-auto ">
                <div className="flex px-4 py-3 bg-[rgba(226,154,154,0.5)] sm:justify-center">
                    <Button
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        sx={{
                            bgcolor: 'rgba(223, 126, 126, 1)',
                            textTransform: 'none',
                            borderRadius: '5px',
                            px: 3,
                            fontFamily: 'medium',
                            fontSize: 14,
                            '&:hover': {
                                bgcolor: '#CE6868',
                            },
                        }}
                    >
                        Guest
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        sx={{
                            ml: 2,
                            bgcolor: 'rgba(223, 126, 126, 1)',
                            textTransform: 'none',
                            borderRadius: '5px',
                            px: 3,
                            fontFamily: 'medium',
                            fontSize: 14,
                            '&:hover': {
                                bgcolor: '#CE6868',
                            },
                        }}
                    >
                        Group
                    </Button>
                </div>
                <div className="p-6 sm:p-4 xs:p-2">
                    <TableContainer
                        component={Paper}
                        sx={{ boxShadow: 'none' }}
                    >
                        {guests.map(
                            (guestGroup: any, groupIndex: React.Key) => (
                                <Table
                                    key={groupIndex}
                                    sx={{
                                        minWidth: 650,
                                        my: 4,
                                        '&:first-of-type': { mt: 0 },
                                        '&:last-child': { mb: 0 },
                                    }}
                                    aria-label="guest-lists"
                                >
                                    <TableHead>
                                        <GuestGroupRow
                                            group={guestGroup.guestGroup}
                                            groupId={guestGroup.id}
                                        />
                                    </TableHead>
                                    <TableBody>
                                        {guestGroup.guests.map(
                                            (guest: any, index: React.Key) => (
                                                <GuestNameRow
                                                    key={index}
                                                    guest={guest.guestName}
                                                    receptionStatus={
                                                        guest.receptionStatus
                                                    }
                                                    ceremonyStatus={
                                                        guest.ceremonyStatus
                                                    }
                                                    weddingBreakfastStatus={
                                                        guest.weddingBreakfastStatus
                                                    }
                                                    groupId={groupIndex}
                                                    guestId={index}
                                                />
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            )
                        )}
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Overview
