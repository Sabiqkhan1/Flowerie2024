import React from 'react'

const PostFormInput: React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
> = ({ placeholder }): JSX.Element => {
    return (
        <input
            placeholder={placeholder}
            className="w-full border border-[rgba(0,0,0,0.6)] bg-white rounded font-roboto-regular placeholder:text-[rgba(0,0,0,0.6)] px-4 py-1 focus-visible:outline-none"
        />
    )
}

export default PostFormInput
