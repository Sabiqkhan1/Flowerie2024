import React from 'react'
import Box from '@mui/material/Box'
import Thumbnail from '../Thumbnail'
import MobileStepper from '@mui/material/MobileStepper'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import DraggableMenu from '../../common/DraggableMenu'
import { hostItems } from '../../../assets/data/static/hostItems'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FiCheckCircle } from 'react-icons/fi'
import { GiTwoCoins } from 'react-icons/gi'
import { memberTasks } from '../../../assets/data/static/memberTasks'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { memberGuests } from '../../../assets/data/static/memberGuests'
import { Link } from 'react-router-dom'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
const Wedding: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ py: 5 }}>
            <Box sx={{ px: 10 }}>
                <Box
                    sx={{
                        display: 'flex',
                        borderRadius: 5,
                        overflow: 'hidden',
                        boxShadow: '2px 5px 10px 0px #3f3f3f60',
                    }}
                >
                    <Thumbnail />
                    <section className="flex-grow bg-[#ECDADA] px-14 py-6">
                        <div className="flex justify-center">
                            <div className="flex">
                                <div className="w-20 h-20 rounded-full bg-[#3F5A8F] mr-[-25px] z-10 flex items-center justify-center font-semibold text-white text-2xl">
                                    S
                                </div>
                                <div className="w-20 h-20 rounded-full bg-[#DF7E7E] flex items-center justify-center font-semibold text-white text-2xl">
                                    D
                                </div>
                            </div>
                        </div>
                        <h3 className="font-semibold text-2xl text-textBlack text-center mt-2">
                            Sabiq & Dania
                        </h3>
                        <h6 className="text-center">
                            <time className="font-light text-xs">
                                22nd of September, 2022
                            </time>
                        </h6>
                        <section className="px-4">
                            <p className="font-light text-xs">
                                Lets get started !
                            </p>
                            <p className="font-medium text-xs uppercase">
                                Status
                            </p>
                            <MobileStepper
                                variant="progress"
                                steps={6}
                                position="static"
                                activeStep={3}
                                sx={{
                                    maxWidth: '100%',
                                    flexGrow: 1,
                                    bgcolor: 'transparent',
                                    px: 0,
                                    py: 1,
                                }}
                                nextButton={<></>}
                                backButton={<></>}
                                LinearProgressProps={{
                                    sx: {
                                        height: 24,
                                        width: '100%',
                                        borderRadius: 3,
                                        border: '2px solid #c4c4c4',
                                        [`&.${linearProgressClasses.colorPrimary}`]:
                                            {
                                                backgroundColor: '#fff',
                                            },
                                        [`& .${linearProgressClasses.bar}`]: {
                                            borderRadius: 5,
                                            backgroundColor: '#DF7E74',
                                        },
                                    },
                                }}
                            />
                        </section>
                        <section className="mt-4 flex items-center justify-between font-semibold text-textBlack">
                            <div className="text-center">
                                <h4 className="mb-3">Suppliers Hired:</h4>
                                <small className="text-sm">
                                    3
                                    <span className="text-zinc-500 text-xs">
                                        /12
                                    </span>
                                </small>
                            </div>
                            <div className="text-center">
                                <h4 className="mb-3">Tasks Completed:</h4>
                                <small className="text-sm">
                                    42
                                    <span className="text-zinc-500 text-xs">
                                        /115
                                    </span>
                                </small>
                            </div>
                            <div className="text-center">
                                <h4 className="mb-3">Guests Attending</h4>
                                <small className="text-sm">
                                    122
                                    <span className="text-zinc-500 text-xs">
                                        /285
                                    </span>
                                </small>
                            </div>
                            <div className="text-center">
                                <h4 className="mb-3">Budget Used</h4>
                                <small className="text-sm">64%</small>
                            </div>
                        </section>
                    </section>
                </Box>
            </Box>
            <Box sx={{ py: 4, pl: 10 }}>
                <section className="mb-4">
                    <h2 className="font-semibold text-textBlack text-2xl">
                        Suppliers
                    </h2>
                    <small className="font-light text-[#868686] text-16">
                        3 out of 16 suppliers booked
                    </small>
                </section>
                <DraggableMenu>
                    {hostItems.map((item, index) => (
                        <div key={index} className="min-w-fit mx-3 first:ml-0">
                            <div className="w-64 aspect-[280/200] bg-zinc-300 rounded-20"></div>
                            <h4 className="font-regular text-lg mt-2">
                                {item.label}
                            </h4>
                        </div>
                    ))}
                </DraggableMenu>
            </Box>
            <Box sx={{ px: 10 }}>
                <Grid container spacing={10}>
                    <Grid item lg={6}>
                        <h2 className="font-semibold text-textBlack text-2xl">
                            Upcoming Tasks
                        </h2>
                        <p className="font-light text-[#868686] text-16">
                            <small className="font-light text-[#868686] text-16">
                                42 out of 115 tasks completed
                            </small>
                            <Link to="../checklist">
                                <Button
                                    variant="text"
                                    sx={{
                                        float: 'right',
                                        color: '#000',
                                        fontFamily: 'semibold',
                                        fontSize: 12,
                                        textTransform: 'none',
                                        p: 0,
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                        },
                                    }}
                                >
                                    {'Add task >'}
                                </Button>
                            </Link>
                        </p>
                        <List
                            sx={{
                                border: '1px solid #C4C4C4',
                                borderRadius: '20px',
                                py: 0,
                            }}
                        >
                            {memberTasks.map((task, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid #c4c4c4',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FiCheckCircle className="text-textBlack text-4xl" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={task.task}
                                        secondary={task.category}
                                        primaryTypographyProps={{
                                            fontFamily: 'regular',
                                            fontSize: 20,
                                            lineHeight: '24px',
                                        }}
                                        secondaryTypographyProps={{
                                            fontFamily: 'regular',
                                            fontSize: 16,
                                            color: '#868686',
                                            lineHeight: '19.5px',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item lg={6}>
                        <h2 className="font-semibold text-textBlack text-2xl">
                            Guest List
                        </h2>
                        <p className="font-light text-[#868686] text-16">
                            <small className="font-light text-[#868686] text-16">
                                122 guests of 285 have confirmed
                            </small>
                            <Link to="../guest-lists">
                                <Button
                                    variant="text"
                                    sx={{
                                        float: 'right',
                                        color: '#000',
                                        fontFamily: 'semibold',
                                        fontSize: 12,
                                        textTransform: 'none',
                                        p: 0,
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                        },
                                    }}
                                >
                                    {'Add guests >'}
                                </Button>
                            </Link>
                        </p>
                        <List
                            sx={{
                                border: '1px solid #C4C4C4',
                                borderRadius: '20px',
                                py: 0,
                            }}
                        >
                            {memberGuests.map((guest, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid #c4c4c4',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <AccountCircleOutlinedIcon
                                            sx={{
                                                fontSize: 36,
                                                color: '#2E2E48',
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={guest.guest}
                                        secondary={guest.status}
                                        primaryTypographyProps={{
                                            fontFamily: 'regular',
                                            fontSize: 20,
                                            lineHeight: '24px',
                                        }}
                                        secondaryTypographyProps={{
                                            fontFamily: 'regular',
                                            fontSize: 16,
                                            color: '#868686',
                                            lineHeight: '19.5px',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ py: 4, px: 10 }}>
                <Grid container>
                    <Grid item lg={12}>
                        <h2 className="font-semibold text-textBlack text-2xl">
                            Budget
                        </h2>
                        <p className="font-light text-[#868686] text-16">
                            <small className="font-light text-[#868686] text-16">
                                122 guests of 285 have confirmed
                            </small>
                            <Link to="../budget-planner">
                                <Button
                                    variant="text"
                                    sx={{
                                        float: 'right',
                                        color: '#000',
                                        fontFamily: 'semibold',
                                        fontSize: 12,
                                        textTransform: 'none',
                                        p: 0,
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                        },
                                    }}
                                >
                                    {'Manage expenses >'}
                                </Button>
                            </Link>
                        </p>
                        <div className="border border-gray rounded-20 shadow-xl shadow-black/10 mt-4">
                            <Grid container>
                                <Grid item lg={6}>
                                    <div className="h-72 border-r border-gray flex flex-col items-center justify-around">
                                        <h4 className="font-semibold text-2xl text-textBlack">
                                            Estimated Cost
                                        </h4>
                                        <h3 className="font-semibold text-4xl text-textBlack">
                                            £16,000
                                        </h3>
                                        <SavingsOutlinedIcon
                                            sx={{
                                                color: '#2E2E48',
                                                fontSize: 36,
                                            }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item lg={6}>
                                    <div className="h-72 flex flex-col items-center justify-around">
                                        <h4 className="font-semibold text-2xl text-textBlack">
                                            Total Cost
                                        </h4>
                                        <h3 className="font-semibold text-4xl text-[#55B97D]">
                                            £6,322
                                        </h3>
                                        <GiTwoCoins
                                            style={{
                                                color: '#2E2E48',
                                                fontSize: 36,
                                            }}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Wedding
