import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MobileStepper from '@mui/material/MobileStepper'
import FilterPanelList from '../../lists/FilterPanelList'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { FiCheckCircle } from 'react-icons/fi'

const CheckList: React.FunctionComponent = (): JSX.Element => {
    return (
        <Box sx={{ py: 5, px: 6 }}>
            <Grid container spacing={1}>
                <Grid item lg={3} xs={12} component="aside">
                    <FilterPanelList />
                </Grid>
                <Grid item lg={9}>
                    <section>
                        <p className="font-medium text-textBlack text-xs">
                            You have complete <strong>42</strong> out of{' '}
                            <strong>115</strong> tasks
                        </p>
                        <div className="w-3/5 my-2">
                            <MobileStepper
                                variant="progress"
                                steps={115}
                                position="static"
                                activeStep={42}
                                sx={{
                                    maxWidth: '100%',
                                    flexGrow: 1,
                                    bgcolor: 'transparent',
                                    p: 0,
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
                        </div>
                    </section>

                    <ListItemButton
                        sx={{
                            border: '1px solid #c4c4c4',
                            borderRadius: 1,
                            my: 2,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: '3rem',
                            }}
                        >
                            <AddCircleOutlineIcon
                                sx={{
                                    fontSize: 36,
                                    color: '#2E2E48',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Add new task"
                            primaryTypographyProps={{
                                color: '#2E2E48',
                                fontFamily: 'regular',
                            }}
                        />
                    </ListItemButton>

                    <section>
                        <h3 className="font-medium lg text-textBlack">
                            From 10 to 12 months
                        </h3>
                        <List
                            sx={{
                                border: '1px solid #C4C4C4',
                                borderRadius: '5px',
                                py: 0,
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((task, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        p: 0,
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid #c4c4c4',
                                        },
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '3rem',
                                            }}
                                        >
                                            <FiCheckCircle className="text-textBlack text-4xl" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                color: '#2E2E48',
                                                fontFamily: 'regular',
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </section>

                    <section className="my-4">
                        <h3 className="font-medium text-lg text-textBlack">
                            From 7 to 9 months
                        </h3>
                        <List
                            sx={{
                                border: '1px solid #C4C4C4',
                                borderRadius: '5px',
                                py: 0,
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((task, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        p: 0,
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid #c4c4c4',
                                        },
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '3rem',
                                            }}
                                        >
                                            <FiCheckCircle className="text-textBlack text-4xl" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                color: '#2E2E48',
                                                fontFamily: 'regular',
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </section>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CheckList
