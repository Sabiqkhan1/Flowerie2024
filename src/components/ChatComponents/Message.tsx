/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import { conversation } from '../../assets/data/static/conversation'
import { useValidator } from '../../hooks/useValidator'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { IconButton, Tooltip } from '@mui/material'
import AttachmentSelect from '../../components/select/AttachmentSelect'
const Message: React.FC = (): JSX.Element => {
    const [chat, setChat] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)
    const { id } = useParams()
    const { validateHyperLink } = useValidator()

    const getChat = () => {
        setLoading(true)
        const userChat = conversation.find((c) => c.user_id === id)
        setChat(userChat)
        setLoading(false)
    }

    useEffect(() => {
        getChat()
    }, [id])

    return (
        <div className="flex flex-col h-full">
            <div className="py-4 px-6 bg-gradient-to-b from-[rgba(249,249,249,1)] to-[rgba(249,249,249,0)] flex items-center justify-between">
                <h2 className="font-semibold text-[rgba(0,0,0,0.9)] text-xl">
                    {chat.user}
                </h2>
                <div className="flex items-center">
                    <AttachmentSelect />
                    <Tooltip title="Call" sx={{ mx: 1 }}>
                        <IconButton size="small">
                            <PhoneOutlinedIcon sx={{ color: '#212121' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Video call" sx={{ mx: 1 }}>
                        <IconButton size="small">
                            <VideocamOutlinedIcon sx={{ color: '#212121' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Media" sx={{ mx: 1 }}>
                        <IconButton size="small">
                            <PhotoSizeSelectActualOutlinedIcon
                                sx={{ color: '#212121' }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="More" sx={{ ml: 1 }}>
                        <IconButton size="small">
                            <MoreHorizOutlinedIcon sx={{ color: '#212121' }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-col flex-grow px-2 pb-2">
                <div className="flex-grow">
                    <div className="h-[calc(100vh-161px)] overflow-auto thin-scroll">
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            <ul className="h-full flex flex-col-reverse">
                                {chat.texts.map(
                                    (text: any, index: React.Key) => (
                                        <li
                                            className={`w-full my-1 flex ${
                                                text.sender_id !== '29'
                                                    ? 'justify-start'
                                                    : 'justify-end'
                                            }`}
                                            key={index}
                                        >
                                            {!validateHyperLink(text.text) ? (
                                                <p className="max-w-[60%] md:max-w-[70%] sm:max-w-[80%] px-2 py-3 bg-[#F3F3F3] break-words rounded-md font-segoe-regular text-sm">
                                                    {text.text}
                                                </p>
                                            ) : (
                                                <a
                                                    className="max-w-[60%] md:max-w-[70%] sm:max-w-[80%] px-2 py-3 bg-[#F3F3F3] break-words rounded-md font-segoe-regular text-sm underline text-[#073557E4]"
                                                    href={text.text}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {text.text}
                                                </a>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                </div>
                <form className="w-full flex justify-between items-center bg-white px-4 py-2 rounded-md border-b shadow-sm">
                    <input
                        type="text"
                        placeholder="Write a message for John Doe"
                        className="w-full font-segoe-regular text-sm focus-visible:outline-none"
                    />
                    <button
                        type="submit"
                        className="p-1 bg-[rgba(0,95,184,1)] text-white rounded-[4px]"
                    >
                        <SendIcon />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Message
