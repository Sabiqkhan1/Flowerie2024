import React, { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
interface LightboxProps {
    open: boolean
    images: string[]
    handleClose(): void
}

const Img = styled('img')({
    maxWidth: '70vw',
    maxHeight: '70vh',
})

const Lightbox: React.FC<LightboxProps> = ({
    open,
    images,
    handleClose,
}): JSX.Element => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'unset'
            setCount(0)
        }
    }, [open])
    return (
        <Backdrop
            open={open}
            sx={{
                zIndex: 50,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }}
        >
            <div className="w-full h-full flex flex-col">
                <div className="flex justify-end px-8 py-4">
                    <CloseIcon
                        sx={{
                            color: '#fff',
                            fontSize: '2rem',
                            cursor: 'pointer',
                        }}
                        onClick={handleClose}
                    />
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full flex items-center">
                        <div className="flex justify-center items-center">
                            <ArrowBackIosNewIcon
                                onClick={() => {
                                    if (count > 0)
                                        setCount((prevCount) => prevCount - 1)
                                }}
                                sx={{
                                    color: count > 0 ? '#fff' : '#ffffff60',
                                    fontSize: {
                                        lg: '4rem',
                                        md: '3.5rem',
                                        sm: '3rem',
                                        xs: '2.5rem',
                                    },
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />
                        </div>
                        <div className="w-full h-full flex justify-center">
                            <Img src={images[count]} />
                        </div>
                        <div className="h-full flex justify-center items-center">
                            <ArrowForwardIosIcon
                                onClick={() => {
                                    if (count < images.length - 1)
                                        setCount((prevCount) => prevCount + 1)
                                }}
                                sx={{
                                    color:
                                        count < images.length - 1
                                            ? '#fff'
                                            : '#ffffff60',
                                    fontSize: {
                                        lg: '4rem',
                                        md: '3.5rem',
                                        sm: '3rem',
                                        xs: '2.5rem',
                                    },
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}

export default Lightbox
