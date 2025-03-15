import { ButtonBase, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as ExpandIcon } from '../../assets/images/icons/Expand.svg'
import Lightbox from '../../components/common/Lightbox'
interface GalleryProps {
    images: string[]
}

const Img = styled('img')({
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: '100%',
})

const Gallery: React.FC<GalleryProps> = ({ images }): JSX.Element => {
    const [showLightBox, setShowLightBox] = useState<boolean>(false)

    const handleOpenLightBox = (): void => {
        setShowLightBox(true)
    }

    const handleCloseLightBox = (): void => {
        setShowLightBox(false)
    }

    const renderSpace = (index: number) => {
        if (index === 0) return 'pl-4 pb-2 sm:pl-0'
        if (index === 1) return 'pl-4 pb-2'
        if (index === 2) return 'pl-4 pt-2 sm:pl-0'
        if (index === 3) return 'pl-4 pt-2'
    }
    return (
        <>
            <Lightbox
                open={showLightBox}
                handleClose={handleCloseLightBox}
                images={images}
            />
            <div
                onClick={handleOpenLightBox}
                className="flex items-center absolute px-6 xs:p-2 py-2 bg-[#FFFCFC] z-10 bottom-[20px] right-6 rounded-[12px] border border-black font-light text-black text-lg cursor-pointer"
            >
                <ButtonBase>
                    <ExpandIcon style={{ width: 24, height: 24 }} />
                    <span className="xs:hidden ml-2">Show All</span>
                </ButtonBase>
            </div>
            <div className="w-full h-full flex sm:flex-col">
                <div className="w-1/2 sm:w-full h-full sm:overflow-hidden sm:rounded-2xl">
                    <Img
                        src={images[0]}
                        alt="product"
                        className="rounded-l-[30px] sm:rounded-none"
                    />
                </div>
                <div className="w-1/2 sm:w-full flex flex-wrap sm:mt-4 xs:hidden">
                    {images
                        .slice(1, images.length)
                        .map((image: string, index: number) => (
                            <div
                                className={`${renderSpace(
                                    index
                                )} w-1/2 flex flex-column`}
                                key={index}
                            >
                                <Img
                                    src={image}
                                    alt="product"
                                    className={`
                                        ${
                                            index % 2 !== 0
                                                ? index === 1
                                                    ? 'rounded-tr-[30px]'
                                                    : 'rounded-br-[30px]'
                                                : 'rounded-none'
                                        } sm:rounded-2xl`}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Gallery
