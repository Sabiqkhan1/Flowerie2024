import React from 'react'
const PostFormButton: React.FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, onClick }): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className="bg-[rgba(126,119,119,0.29)] px-4 py-1 rounded-2xl text-[#4B4B4B] text-sm font-semibold hover:bg-[rgba(104,101,101,0.29)] transition-colors duration-300 mr-4"
        >
            {children}
        </button>
    )
}

export default PostFormButton
