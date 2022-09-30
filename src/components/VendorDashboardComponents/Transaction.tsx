import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.register(ChartDataLabels)

export const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
        datalabels: {
            display: false,
        },
    },
    elements: {
        bar: {
            borderRadius: 15,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                stepSize: 40000,
            },
            grid: {
                borderColor: 'rgba(224, 224, 224, 1)',
                borderDash: [10, 10],
                tickWidth: 0,
                tickLength: 0,
            },
        },
    },
}

export const paymentOptions: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        datalabels: {
            display: true,
            anchor: 'center',
            align: 'center',
            offset: 10,
            padding: 10,
            font: {
                family: 'regular',
            },
            color: '#333333',
        },
    },
    elements: {
        bar: {
            borderRadius: 15,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
            },
        },
        y: {
            grid: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false,
            },
        },
    },
}

const labels = [
    'Mar 1 - 7',
    'Mar 8 - 14',
    'Mar 15 -21',
    'Mar 22 -28',
    'Final wk',
]

export const data: ChartData<'bar'> = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 200000 })
            ),
            backgroundColor: 'rgba(236, 204, 255, 1)',
        },
    ],
}

export const errorData: ChartData<'bar'> = {
    labels: ['a'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [1],
            backgroundColor: '#FFBB4F',
        },
    ],
}

export const fraudData: ChartData<'bar'> = {
    labels: ['x'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [5],
            backgroundColor: '#FFDA93',
        },
    ],
}
export const bankData: ChartData<'bar'> = {
    labels: ['o'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [3],
            backgroundColor: '#FF7576',
        },
    ],
}
export const systemData: ChartData<'bar'> = {
    labels: ['n'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10],
            backgroundColor: '#80E0E5',
        },
    ],
}
const Transaction: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex items-center">
                <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-lg" />
                <h3 className="text-[#FFA14E] font-bold ml-3">Hey Anddy!</h3>
            </div>
            <h4 className="font-bold text-lg text-black mt-1">
                You earned £2,356 this month.
            </h4>
            <Button
                variant="text"
                disableRipple
                sx={{
                    textTransform: 'none',
                    fontFamily: 'semibold',
                    color: '#828282',
                    p: 0,
                    '&:hover': {
                        bgcolor: 'transparent',
                    },
                    my: 2,
                }}
                endIcon={
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FAF2FF] rounded-md">
                        <IconButton size="small">
                            <ArrowDropDownIcon sx={{ color: '#BB6BD9' }} />
                        </IconButton>
                    </div>
                }
            >
                Last 30 days
            </Button>
            <div className="w-full h-72 border border-commonLight rounded-2xl p-4">
                <Bar options={options} data={data} />
            </div>
            <div className="w-full flex flex-wrap my-4 md:flex-col">
                <div className="w-1/2 pr-4 md:w-full md:p-0">
                    <div className="w-full p-4 border border-commonLight rounded-2xl">
                        <h3 className="font-bold">Success rate</h3>
                        <div className="w-56 h-56 mx-auto">
                            <CircularProgressbar
                                value={40}
                                text={`${40}%`}
                                strokeWidth={12}
                                styles={buildStyles({
                                    trailColor: '#DFEEDB',
                                    pathColor: '#A6D997',
                                    textColor: '#89B27C',
                                    textSize: 14,
                                })}
                            />
                        </div>
                        <div className="mt-4 flex">
                            <div className="w-1/2 flex justify-center">
                                <div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-[#DFEEDB] rounded-md" />
                                        <p className="font-semibold text-3xl text-[#333333] ml-3">
                                            1
                                        </p>
                                    </div>
                                    <p className="font-semibold text-xs text-[#828282]">
                                        Unsuccessful
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-[#A6D997] rounded-md" />
                                        <p className="font-semibold text-3xl text-[#333333] ml-3">
                                            150
                                        </p>
                                    </div>
                                    <p className="font-semibold text-xs text-[#828282]">
                                        Successful
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 pl-4 md:w-full md:p-0">
                    <div className="w-full p-4 border border-commonLight rounded-2xl">
                        <h3 className="font-bold">Payment issues</h3>
                        <div className="w-full flex my-4 pt-2">
                            <div className="w-1/4 max-w-[7rem] h-[6.5rem]">
                                <Bar
                                    options={paymentOptions}
                                    data={errorData}
                                />
                            </div>
                            <div className="w-1/4 max-w-[7rem] h-[6.5rem]">
                                <Bar
                                    options={paymentOptions}
                                    data={fraudData}
                                />
                            </div>
                            <div className="w-1/4 max-w-[7rem] h-[6.5rem]">
                                <Bar options={paymentOptions} data={bankData} />
                            </div>
                            <div className="w-1/4 max-w-[7rem] h-[6.5rem]">
                                <Bar
                                    options={paymentOptions}
                                    data={systemData}
                                />
                            </div>
                        </div>
                        <p className="font-semibold text-sm text-[#FFA14E]">
                            Total number of errors:{' '}
                            <strong className="text-lg">19</strong>
                        </p>
                        <div className="flex items-center my-2">
                            <div className="w-5 h-5 bg-[#FFBB4F] text-xs text-white leading-none rounded-md flex items-center justify-center">
                                a
                            </div>
                            <p className="font-semibold text-xs text-[#828282] ml-3">
                                Customer errors
                            </p>
                        </div>
                        <div className="flex items-center my-2">
                            <div className="w-5 h-5 bg-[#FFDA93] text-xs text-white leading-none rounded-md flex items-center justify-center">
                                x
                            </div>
                            <p className="font-semibold text-xs text-[#828282] ml-3">
                                Fraud blocks
                            </p>
                        </div>
                        <div className="flex items-center my-2">
                            <div className="w-5 h-5 bg-[#FF7576] text-xs text-white leading-none rounded-md flex items-center justify-center">
                                o
                            </div>
                            <p className="font-semibold text-xs text-[#828282] ml-3">
                                Bank errors
                            </p>
                        </div>
                        <div className="flex items-center my-2">
                            <div className="w-5 h-5 bg-[#80E0E5] text-xs text-white leading-none rounded-md flex items-center justify-center">
                                n
                            </div>
                            <p className="font-semibold text-xs text-[#828282] ml-3">
                                System errors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction
