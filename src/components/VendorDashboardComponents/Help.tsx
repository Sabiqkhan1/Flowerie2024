import React from 'react'
import { MdWavingHand } from 'react-icons/md'

const Help: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex items-center">
                <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-2xl" />
                <span className="text-[#FFA14E] font-bold text-lg ml-3">
                    Hey Anddy!
                </span>
            </div>
        </div>
    )
}

export default Help
