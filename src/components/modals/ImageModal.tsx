import { Dialog, styled } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { toggleImage } from '../../redux/modals/modalSlice'
import { GalleryImageType } from '../../assets/data/interfaces'

interface ImageModalProps {
    image: GalleryImageType
    handleSaveCaption(value: string, id: number): void
}

const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
})

const ImageModal: React.FC<ImageModalProps> = ({
    image,
    handleSaveCaption,
}): JSX.Element => {
    const open = useSelector((state: RootState) => state.modals.imageModal)
    const [caption, setCaption] = useState<string>(image.caption)
    const dispatch = useDispatch()

    return (
        <Dialog
            open={image && open}
            onClose={() => dispatch(toggleImage())}
            PaperProps={{
                sx: {
                    width: 1100,
                    maxWidth: 'unset',
                    borderRadius: 4,
                    maxHeight: 'unset',
                },
            }}
        >
            <div className="h-full w-full">
                <div className="py-4 text-center border-b-2 border-[#A3A1A1] font-semibold text-lg">
                    Add description
                </div>
                <div className="w-full p-4 flex">
                    <div className="w-3/5 aspect-[4/3]">
                        <Img src={image?.file?.preview} />
                    </div>
                    <div className="ml-4 pt-4 flex flex-col justify-between">
                        <div>
                            <label className="font-regular mb-1">
                                Add description
                            </label>
                            <p className="font-regular text-[#797979]">
                                Provide more information about what makes your
                                space unique.
                            </p>
                            <textarea
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setCaption(e.target.value)}
                                value={caption}
                                className="w-full min-h-[150px] bg-[#fbfbfb] px-4 py-2 border border-[rgba(0,0,0,0.6)] rounded-md focus-visible:outline-none font-regular text-sm resize-none"
                            />
                        </div>
                        <div className="text-right">
                            <button
                                onClick={() =>
                                    handleSaveCaption(caption, image.id)
                                }
                                className="bg-black px-8 py-3 rounded-xl text-white font-semibold"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ImageModal
