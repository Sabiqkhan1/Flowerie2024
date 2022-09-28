import { Grid, styled } from '@mui/material'
import React, { useState } from 'react'
import cover from '../../assets/images/post-category.webp'
import PostFormButton from '../buttons/PostFormButton'
import PostCategoryCard from '../cards/PostCategoryCard'
import { postCategories } from '../../assets/data/static/postCategories'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
const Img = styled('img')({
    display: 'block',
    width: '100%',
    maxHeight: '100vh',
    objectFit: 'cover',
})

const Category: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)

    const imageLoaded = () => setLoading(false)
    return (
        <div className="h-screen w-full">
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
                }}
            >
                <Grid item lg={6}>
                    <div className="relative">
                        <div className="absolute w-full h-full flex flex-col items-center pt-12">
                            <p className="max-w-sm font-regular text-4xl text-center text-white">
                                What kind of listing would you like to create?
                            </p>
                        </div>
                        <Img
                            src={cover}
                            alt="cover"
                            style={{
                                visibility: loading ? 'hidden' : 'visible',
                                width: '100%',
                            }}
                            onLoad={imageLoaded}
                        />
                    </div>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                    <div className="h-full bg-white flex flex-col">
                        <div className="text-right py-4 sm:text-center">
                            <PostFormButton>Help</PostFormButton>
                            <PostFormButton
                                onClick={() => navigate('/vendor-dashboard')}
                            >
                                Save and exit
                            </PostFormButton>
                        </div>
                        <div className="flex-grow flex justify-center items-center">
                            <div className="w-3/5 h-[calc(100vh-160px)] overflow-auto no-scroll sm:w-4/5 sm:mx-auto">
                                <div className="w-full h-full">
                                    {postCategories.map((category, index) => (
                                        <PostCategoryCard
                                            to={category.to}
                                            label={category.label}
                                            thumb={category.thumb}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className="text-right border-t border-[rgba(184,178,178,1)] p-4">
                            <Link to="category">
                                <button className="bg-[#E15151] px-6 py-3 rounded-2xl text-white font-semibold">
                                    Next
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Category
