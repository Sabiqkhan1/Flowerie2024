import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import PostCollapse from '../collapses/PostCollapse'
const Post: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex items-center">
                <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-2xl" />
                <span className="text-[#FFA14E] font-bold text-lg ml-3">
                    Hey Anddy! Here are your active Posts
                </span>
            </div>
            <div className="mt-4">
                <PostCollapse />
                <PostCollapse />
            </div>
        </div>
    )
}
export default Post
