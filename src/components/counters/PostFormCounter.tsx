import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface PostFormCounterProps {
    counter: number
    label: string
    limit: boolean
    hasLimit?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    increment(): void
    decrement(): void
    toggleLimit?(): void
}

const PostFormCounter: React.FC<PostFormCounterProps> = ({
    counter,
    label,
    limit,
    hasLimit = true,
    onChange,
    increment,
    decrement,
    toggleLimit,
}): JSX.Element => {
    return (
        <div>
            <label className="font-semibold text-[#858585] pl-2">{label}</label>
            <input
                type="number"
                value={counter}
                onChange={onChange}
                className="w-full bg-[#FCFCFC] border-2 border-[#858585] rounded-2xl font-semibold text-4xl py-3 text-center focus-visible:outline-none disabled:border-[#cccccc] disabled:text-[rgba(0,0,0,0.5)]"
                disabled={!hasLimit}
            />
            <div className="text-right my-2">
                {limit && (
                    <button
                        onClick={toggleLimit}
                        className={`px-3 py-1 float-left font-semibold ${
                            hasLimit ? 'text-[#cfcfcf]' : 'text-[#4B4B4B]'
                        } text-xs ${
                            hasLimit
                                ? 'bg-[#4B4B4B]'
                                : 'bg-[rgba(126,119,119,0.29)]'
                        } rounded-full transition-colors duration-500
                        `}
                    >
                        I have no limit!
                    </button>
                )}
                <button
                    onClick={() => hasLimit && decrement()}
                    className="w-7 h-7 rounded-full bg-[#F5F5F5] shadow-md mr-2"
                >
                    <RemoveIcon sx={{ fontSize: 16 }} />
                </button>
                <button
                    onClick={() => hasLimit && increment()}
                    className="w-7 h-7 rounded-full bg-[#F5F5F5] shadow-md"
                >
                    <AddIcon sx={{ fontSize: 16 }} />
                </button>
            </div>
        </div>
    )
}

export default PostFormCounter
