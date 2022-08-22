import React from 'react'

const RoomCardTextArea: React.FC<
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >
> = ({ placeholder }): JSX.Element => {
    return (
        <textarea
            maxLength={200}
            placeholder={placeholder}
            className="w-full h-12 border border-[rgba(0,0,0,0.6)] bg-white rounded font-roboto-regular text-xs placeholder:text-[rgba(0,0,0,0.6)] px-1 py-1 focus-visible:outline-none resize-none"
        />
    )
}

export default RoomCardTextArea
