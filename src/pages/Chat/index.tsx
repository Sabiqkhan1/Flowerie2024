import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Chat = () => {
    return (
        <div className="h-screen bg-[#F3F3F3] flex flex-col">
            <div className="px-4 py-2">
                <Link to="">
                    <h4 className="font-segoe-regular text-sm text-black">
                        Litee Chat
                    </h4>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Chat
