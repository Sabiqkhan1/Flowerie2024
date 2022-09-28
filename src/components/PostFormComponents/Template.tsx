import { Grid, styled } from '@mui/material'
import React, { useState } from 'react'
import PostFormButton from '../buttons/PostFormButton'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
const Img = styled('img')({
    display: 'block',
    width: '100%',
    maxHeight: '100vh',
    objectFit: 'cover',
})

interface TemplateProps {
    children: React.ReactNode
    cover: string
    description: string
    next(): void
    back(): void
}

const Template: React.FC<TemplateProps> = ({
    children,
    cover,
    description,
    next,
    back,
}): JSX.Element => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <div className="h-screen w-full sm:w-[100vw]">
            {loading && (
                <div className="fixed z-50 w-screen h-screen flex justify-center items-center">
                    <ClipLoader loading={loading} size={50} color="#DF7E7E" />
                </div>
            )}
            <Grid
                container
                sx={{
                    height: '100%',
                    visibility: loading ? 'hidden' : 'visible',
                    justifyContent: 'center',
                }}
            >
                <Grid item lg={6} sm={10} xs={12}>
                    <div className="relative">
                        <div className="absolute w-full h-full flex flex-col items-center pt-12">
                            <p className="max-w-sm font-regular text-4xl text-center text-white">
                                {description}
                            </p>
                        </div>
                        <Img
                            style={!loading ? {} : { visibility: 'hidden' }}
                            placeholder="../../assets/images/avatar.png"
                            src={cover}
                            alt="cover"
                            onLoad={() => setLoading(false)}
                            className="sm:h-[70vh] sm:w-[100vw]"
                        />
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <div className="h-full bg-white flex flex-col relative">
                        <div className="w-full text-right py-4 absolute top-0 z-50">
                            <PostFormButton>Help</PostFormButton>
                            <PostFormButton
                                onClick={() => navigate('/vendor-dashboard')}
                            >
                                Save and exit
                            </PostFormButton>
                        </div>
                        <div className="flex-grow flex justify-center items-center">
                            {children}
                        </div>
                        <div className="flex items-center justify-between border-t border-[rgba(184,178,178,1)] p-4">
                            <button
                                onClick={back}
                                className="font-semibold underline"
                            >
                                Back
                            </button>

                            <button
                                onClick={next}
                                className="bg-[#E15151] px-6 py-3 rounded-2xl text-white font-semibold"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Template
