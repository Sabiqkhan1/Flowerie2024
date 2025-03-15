import React from 'react'

const ToolAddButton: React.FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, onClick }): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className="w-3/4 bg-gray py-4 rounded-lg font-semibold text-lg text-black shadow-md hover:scale-105 transition-transform"
        >
            {children}
        </button>
    )
}

export default ToolAddButton
