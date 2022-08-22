import React from 'react'

const CountDown: React.FunctionComponent = (): JSX.Element => {
    return (
        <time className="bg-gradient-to-b from-black/90 py-3 flex justify-center text-white">
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xl">114</p>
                <p className="font-bold text-xs">Days</p>
            </div>
            <div className="mx-4">:</div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xl">11</p>
                <p className="font-bold text-xs">Hours</p>
            </div>
            <div className="mx-4">:</div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xl">29</p>
                <p className="font-bold text-xs">Min</p>
            </div>
            <div className="mx-4">:</div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xl">46</p>
                <p className="font-bold text-xs">Sec</p>
            </div>
        </time>
    )
}

export default CountDown
