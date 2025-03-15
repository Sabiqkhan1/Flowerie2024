import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Grid from '@mui/material/Grid'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { budgetDivisions } from '../../../assets/data/static/budgetDivisions'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import { GiTwoCoins } from 'react-icons/gi'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import ToggleButton from '@mui/material/ToggleButton'
import Drawer from '@mui/material/Drawer'
ChartJS.register(ArcElement, Tooltip, Legend)
const options = {
    aspectRatio: 747 / 332,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
}
export const data = {
    labels: ['Used', 'Remaining', 'Spare'],
    datasets: [
        {
            label: '# of Votes',
            data: [63, 25, 12],
            backgroundColor: ['#4318FF', '#6AD2FF', '#EFF4FB'],
            borderColor: ['#4318FF', '#6AD2FF', '#EFF4FB'],
            borderWidth: 1,
        },
    ],
}
const BudgetPlanner = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <ToggleButton
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{
                    visibility: { md: 'hidden' },
                    mx: '20px',
                    my: '10px',
                    border: 0,
                }}
                value="justify"
                aria-label="justified"
            >
                <FormatAlignJustifyIcon />
            </ToggleButton>
            <section className="p-8 flex sm:flex-col sm:p-4 xs:p-2">
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 256,
                        border: '1px solid #c4c4c4',
                        borderRadius: 3,
                        py: 0,
                    }}
                    className="sm:hidden"
                    component="aside"
                    aria-labelledby="suppliers-list"
                >
                    <ListItemButton
                        sx={{
                            pl: 2,
                            py: 1,
                            borderBottom: '1px solid #c4c4c4',
                            borderRadius: '12px 12px 0 0',
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <AddCircleOutlineIcon sx={{ color: '#2E2E48' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Add new category"
                            primaryTypographyProps={{
                                fontFamily: 'medium',
                                fontSize: 14,
                                color: '#828282',
                                ml: 1,
                            }}
                        />
                    </ListItemButton>
                    {budgetDivisions.map((item, index) => (
                        <ListItemButton
                            sx={{
                                pl: 2,
                                py: 1,
                                borderBottom: '1px solid #c4c4c4',
                                '&:last-child': {
                                    borderBottom: 'none',
                                    borderRadius: '0 0 12px 12px',
                                },
                            }}
                            key={index}
                        >
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontFamily: 'medium',
                                    fontSize: 14,
                                    color: '#828282',
                                    ml: 1,
                                }}
                            />
                        </ListItemButton>
                    ))}
                </List>
                <div className="ml-8 flex-grow sm:ml-4 xs:mx-2">
                    <div className="border border-gray rounded-20 shadow-xl shadow-black/10 mt-4">
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className="h-72 border-r border-gray flex flex-col items-center justify-around  sm:border-r-0 sm:border-b sm:border-gray sm:h-56">
                                    <h4 className="font-semibold text-2xl text-textBlack xs:text-xl">
                                        Estimated Cost
                                    </h4>
                                    <h3 className="font-semibold text-4xl text-textBlack xs:text-2xl">
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
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className="h-72 flex flex-col items-center justify-around  sm:h-56">
                                    <h4 className="font-semibold text-2xl text-textBlack xs:text-xl">
                                        Total Cost
                                    </h4>
                                    <h3 className="font-semibold text-4xl text-[#55B97D] xs:text-2xl">
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
                    <div className="w-full bg-[#E4E4E4] rounded-xl mt-4 py-8">
                        <div className="w-2/5 bg-white rounded-xl mx-auto flex justify-between items-center sm:w-4/5">
                            <section className="text-center p-4">
                                <p className="font-regular text-xs text-[#A3AED0] flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-1" />
                                    Budget Used
                                </p>
                                <p className="font-bold text-[#2B3674]">63%</p>
                            </section>
                            <section className="text-center p-4">
                                <p className="font-regular text-xs text-[#A3AED0] flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-300 mr-1" />
                                    Budget Remaining
                                </p>
                                <p className="font-bold text-[#2B3674]">25%</p>
                            </section>
                        </div>
                        <div className="w-full h-64 mt-8 xs:h-48">
                            <Pie data={data} options={options} />
                        </div>
                    </div>

                    <Drawer
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 256,
                                border: '1px solid #c4c4c4',
                                borderRadius: 3,
                                py: 0,
                            }}
                            className=" "
                            component="aside"
                            aria-labelledby="suppliers-list"
                        >
                            <ListItemButton
                                sx={{
                                    pl: 2,
                                    py: 1,
                                    borderBottom: '1px solid #c4c4c4',
                                    borderRadius: '12px 12px 0 0',
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                    <AddCircleOutlineIcon
                                        sx={{ color: '#2E2E48' }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Add new category"
                                    primaryTypographyProps={{
                                        fontFamily: 'medium',
                                        fontSize: 14,
                                        color: '#828282',
                                        ml: 1,
                                    }}
                                />
                            </ListItemButton>
                            {budgetDivisions.map((item, index) => (
                                <ListItemButton
                                    sx={{
                                        pl: 2,
                                        py: 1,
                                        borderBottom: '1px solid #c4c4c4',
                                        '&:last-child': {
                                            borderBottom: 'none',
                                            borderRadius: '0 0 12px 12px',
                                        },
                                    }}
                                    key={index}
                                >
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontFamily: 'medium',
                                            fontSize: 14,
                                            color: '#828282',
                                            ml: 1,
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </section>
        </>
    )
}

export default BudgetPlanner
