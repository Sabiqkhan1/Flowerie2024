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
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    aspectRatio: 747 / 332,
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
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

const labels = [
    'Mar 1 - 7',
    'Mar 8 - 14',
    'Mar 15 -21',
    'Mar 22 -28',
    'Final wk',
]

export const data = {
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
            <div className="w-full border rounded-2xl p-4">
                <Bar options={options} data={data} />
            </div>
            {/* <div className="w-full  flex flex-wrap my-4">
                <div className="w-1/2 h-[100px] p-4">
                    <div className="w-full h-full bg-blue-300"></div>
                </div>
                <div className="w-1/2 h-[100px] p-4">
                    <div className="w-full h-full bg-red-300"></div>
                </div>
            </div> */}
        </div>
    )
}

export default Transaction
