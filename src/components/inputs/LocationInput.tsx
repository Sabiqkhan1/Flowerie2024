import React from 'react'

const LocationInput: React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
> = ({ placeholder }) => {
    return (
        <input
            className="w-full font-light p-3 rounded-xl my-2 border border-[rgba(0,0,0,0.2)] focus-visible:outline-none"
            placeholder={placeholder}
        />
    )
}

export default LocationInput
