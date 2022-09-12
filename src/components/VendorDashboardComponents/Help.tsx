import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import { IoLogoFacebook } from 'react-icons/io5'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const Help: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex items-center">
                <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-2xl" />
                <span className="text-[#FFA14E] font-bold text-lg ml-3">
                    Hey Anddy!
                </span>
            </div>
            <div className="my-4 flex">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl text-black "
                >
                    <IoLogoFacebook />
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl text-black mx-8"
                >
                    <BsInstagram />
                </a>
                <a
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noreferrer"
                    className="text-4xl text-black "
                >
                    <FaTwitter />
                </a>
            </div>
            <h2 className="font-playfair-regular text-4xl">Contact Us</h2>
            <form className="max-w-[70%] my-4">
                <small className="text-16 font-medium text-[#7A7A7A]">
                    Please write message and a member of our team will respond
                    within 48 hours{' '}
                </small>
                <TextField
                    multiline
                    rows={10}
                    fullWidth
                    sx={{
                        mt: 2,
                        mb: 4,
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'black',
                        borderRadius: '40px',
                        px: 4,
                        textTransform: 'none',
                        fontFamily: 'medium',
                        '&:hover': {
                            bgcolor: 'black',
                        },
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Help
