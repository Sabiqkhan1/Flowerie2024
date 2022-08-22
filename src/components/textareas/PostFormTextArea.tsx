import React from 'react'

const PostFormTextArea: React.FC<
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >
> = ({ placeholder }): JSX.Element => {
    return (
        <textarea
            placeholder={placeholder}
            className="w-full h-24 border border-[rgba(0,0,0,0.6)] bg-white rounded font-roboto-regular placeholder:text-[rgba(0,0,0,0.6)] px-4 py-1 focus-visible:outline-none resize-none"
        />
    )
}

export default PostFormTextArea
