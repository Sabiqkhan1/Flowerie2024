import React from 'react'

const ToolSearchInput: React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
> = ({ placeholder }): JSX.Element => {
    return (
        <input
            className="bg-[#FFFEFE] rounded-xl p-3 w-full focus-visible:outline-none placeholder:text-[#B6B1B1] font-semibold text-sm"
            placeholder={placeholder}
        />
    )
}

export default ToolSearchInput
