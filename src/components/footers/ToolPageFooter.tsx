import React from 'react'

const ToolPageFooter: React.FC = (): JSX.Element => {
    return (
        <footer className="flex justify-between">
            <div className="w-1/2 flex flex-col">
                <p className="font-semibold text-black px-2">Date Range</p>
                <div className="w-1/3 h-14 bg-gray rounded-tr-20"></div>
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <p className="font-semibold text-black px-2">Total</p>
                <div className="w-1/3 h-14 bg-gray rounded-tl-20"></div>
            </div>
        </footer>
    )
}

export default ToolPageFooter
